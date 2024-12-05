function DashBoard() {
  return (
    <main className="main-content" data-testid="main-content">
      <div className="data-content">
        <h1>OVERVIEW</h1>
        {/* Applied - Offers received - Rejected */}
        <div
          className="overall-metrics-cont"
          data-testid="overall-metrics-cont"
        >
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
        <nav>
          <button>Activity</button>
          <button>Upcoming</button>
          <button>Scheduled</button>
        </nav>
        {/* Reminders/Pending tasks */}
      </div>
    </main>
  );
}

export default DashBoard;
