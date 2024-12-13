// import { Link } from "react-router-dom";

function Header() {
  return (
    <header role="banner">
      <h1>Job Hunt App</h1>
      <section>
        <input
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
