import { useState } from "react";

function DashBoard() {
  const [selectedTab, setSelectedTab] = useState<string>("act");

  let content: JSX.Element = <a href="#">Applied to (company) as (title)</a>;

  if (selectedTab === "off") {
    content = <a href="#">Offer from (company) on (applicationDate)</a>;
  } else if (selectedTab === "up") {
    content = (
      <a href="#">
        Upcoming interview on (appointmentDate) at (time) from (company) with
        (interviewer)
      </a>
    );
  } else if (selectedTab === "rej") {
    content = <a href="#">Rejected from (company)</a>;
  } else {
    content = <a href="#">Applied to (company) as (title)</a>;
  }

  const labels: { id: number; title: string; trigger: string }[] = [
    { id: 1, title: "Applied", trigger: "act" },
    { id: 2, title: "Offers", trigger: "off" },
    { id: 3, title: "Upcoming", trigger: "up" },
    { id: 4, title: "Rejected", trigger: "rej" },
  ];

  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>OVERVIEW</h1>
      {/* Applied - Offers - Upcoming - Rejected */}
      <nav>
        {labels.map((btn) => {
          return (
            <button key={btn.id} onClick={() => setSelectedTab(btn.trigger)}>
              {btn.title} <span>1</span>
            </button>
          );
        })}
      </nav>

      {/*
      1. Activity nav: <a>Applied to (company) as (title)</a>;
      2. Offers from: <a>Offer from (company) on (applicationDate)</a>;
      3. Upcoming interviews: <a>Upcoming interview on (appointmentDate) at (time) from (company) with (interviewer)</a>; 
      4. Rejected interviews: <a>Rejected from (company)</a>;
      */}
      <section aria-label="overview section" className="dashboard-section">
        {content}
      </section>

      {/* Reminders/Pending tasks */}
      <label htmlFor="dashboard-notes">Notes or pending tasks</label>
      <textarea name="dashboard-notes" id="dashboard-notes"></textarea>
    </div>
  );
}

export default DashBoard;
