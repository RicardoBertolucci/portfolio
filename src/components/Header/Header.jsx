import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <h1 className="navbar__title">Ricardo Bertolucci | Dev.</h1>

      <nav className="navbar__nav">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" end className="navbar__link">
              Home
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink to="/about" className="navbar__link">
              Sobre
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink to="/projects" className="navbar__link">
              Projetos
            </NavLink>
          </li>

          <li className="navbar__item">
            <NavLink to="/contact" className="navbar__link">
              Contato
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
