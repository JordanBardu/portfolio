function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row gap-2">
        <li>
          <a href="/">Accueil</a>
        </li>
        <li>
          <a href="/parcours">Parcours</a>
        </li>
        <li>
          <a href="/projets">Projets</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
