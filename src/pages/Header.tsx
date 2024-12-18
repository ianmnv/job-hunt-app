// import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Job Hunt App</h1>
      <section>
        <input
          name="searchApp"
          id="searchApp"
          type="search"
          placeholder="Search application"
        />
      </section>
    </header>
  );
}

export default Header;
