import { useState } from "react";
import { useAppSelector } from "../store/hooks/reduxHooks";

function DashBoard() {
  const appState = useAppSelector((state) => state.applications);
  const [selectedTab, setSelectedTab] = useState<string>("app");
  const labels: { title: string; trigger: string }[] = [
    { title: "Applied", trigger: "app" },
    { title: "Offers", trigger: "off" },
    { title: "Upcoming", trigger: "up" },
    { title: "Rejected", trigger: "rej" },
    { title: "Pending", trigger: "pen" },
  ];

  function changeContent(tab: string): JSX.Element {
    const dinamicContent = appState?.filter((job) => job.status.includes(tab));

    if (dinamicContent?.length === 0)
      return <p>No job application with this status.</p>;

    return (
      <>
        {dinamicContent?.map((job, i) => {
          return (
            <a key={i} href="#">
              {job.status === "applied"
                ? `Applied to ${job.company} as ${job.title}`
                : job.status === "offers"
                ? `Offer from ${job.company} on ${job.applicationDate}`
                : job.status === "upcoming"
                ? // ? `Upcoming interview on ${job.applicationDate} at ${job.interviews?[0].appointmentDate} from ${job.company} with ${job.interviews[0].interviewers[0]}`
                  `Upcoming interview on ${job.applicationDate}`
                : job.status === "rejected"
                ? `Rejected from ${job.company}`
                : job.status === "pending"
                ? `Pending application from ${job.company}`
                : null}
            </a>
          );
        })}
      </>
    );
  }

  return (
    <div>
      <h1>DashBoard</h1>

      <nav>
        {labels.map((label, i) => {
          const numberOfJobs = appState?.filter(
            (job) => job.status.toLowerCase() === label.title.toLowerCase()
          ).length;

          return (
            <button key={i} onClick={() => setSelectedTab(label.trigger)}>
              {label.title} <span>{numberOfJobs}</span>
            </button>
          );
        })}
      </nav>

      {/*
      1. Activity nav: <a>Applied to (company) as (title)</a>;
      2. Offers from: <a>Offer from (company) on (applicationDate)</a>;
      3. Upcoming interviews: <a>Upcoming interview on (appointmentDate) at (time) from (company) with (interviewer)</a>; 
      4. Rejected interviews: <a>Rejected from (company)</a>;
      5. Pending applications: <a>Pending application from (company)</a>;
      */}
      <section aria-label="overview section" className="dashboard-section">
        {changeContent(selectedTab)}
      </section>

      {/* Reminders/Pending tasks */}
      <label htmlFor="dashboard-notes">Notes or pending tasks</label>
      <textarea name="dashboard-notes" id="dashboard-notes"></textarea>
    </div>
  );
}

export default DashBoard;
