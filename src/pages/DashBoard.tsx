import { useState } from "react";

function DashBoard() {
  const [selectedTab, setSelectedTab] = useState<
    "activity" | "upcoming" | "schedule"
  >("activity");

  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>OVERVIEW</h1>
      {/* Applied - Offers received - Rejected */}
      <div className="overall-results-cont" data-testid="overall-results-cont">
        <p data-testid="overall-results">
          Applied <span>10</span>
        </p>
        <p data-testid="overall-results">
          Offers <span>3</span>
        </p>
        <p data-testid="overall-results">
          Rejected <span>5</span>
        </p>
      </div>

      {/* Activity nav: 1. Applied to (company name) as (position); 2. Upcoming interviews; 3. Schedule interviews  */}
      <nav data-testid="">
        <button>Activity</button>
        <button>Upcoming</button>
        <button>Scheduled</button>
      </nav>

      <div className="dashboar"></div>
      {/* Reminders/Pending tasks */}
    </div>
  );
}

export default DashBoard;
