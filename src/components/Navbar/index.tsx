import { Link } from "react-router";

function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-2">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/course">Parcours</Link>
        </li>
        <li>
          <Link to="/projects">Projets</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
