// import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Job Hunt App</h1>
      <section role="headerSection">
        <input
          data-testid="inputSearch"
          name="searchApp"
          id="searchApp"
          type="text"
          placeholder="Search application, job title..."
        />
      </section>
    </header>
  );
}

export default Header;
