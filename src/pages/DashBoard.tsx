import { useState, useContext } from "react";
import MainContext from "../MainContext";

function DashBoard() {
  const appState = useContext(MainContext);
  const [selectedTab, setSelectedTab] = useState<string>("act");

  let content: JSX.Element = <a href="#">Applied to (company) as (title)</a>;

  function changeContent(tab: typeof selectedTab): JSX.Element {
    if (tab === "off") {
      content = <a href="#">Offer from (company) on (applicationDate)</a>;
    } else if (tab === "up") {
      content = (
        <a href="#">
          Upcoming interview on (appointmentDate) at (time) from (company) with
          (interviewer)
        </a>
      );
    } else if (tab === "rej") {
      content = <a href="#">Rejected from (company)</a>;
    } else if (tab === "pen") {
      content = <a href="#">Pending application from (company)</a>;
    } else {
      content = <a href="#">Applied to (company) as (title)</a>;
    }

    return content;
  }

  const labels: { title: string; trigger: string }[] = [
    { title: "Applied", trigger: "act" },
    { title: "Offers", trigger: "off" },
    { title: "Upcoming", trigger: "up" },
    { title: "Rejected", trigger: "rej" },
    { title: "Pending", trigger: "pen" },
  ];

  return (
    <div>
      <h1>OVERVIEW</h1>
      {/* Applied - Offers - Upcoming - Rejected - Pending */}
      <nav>
        {labels.map((btn, i) => {
          const numberOfJobs = appState?.filter(
            (job) => job.status.toLowerCase() === btn.title.toLowerCase()
          ).length;

          return (
            <button key={i} onClick={() => setSelectedTab(btn.trigger)}>
              {btn.title} <span>{numberOfJobs}</span>
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
