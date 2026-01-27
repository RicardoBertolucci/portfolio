import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.navbar__container}>
        <h1 className={styles.navbar__title}>
          Ricardo Bertolucci <span>| Dev.</span>
        </h1>

        {/* Botão hambúrguer (mobile) */}
        <button
          className={styles.navbar__toggle}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <FiX size={24} color="#ffffff" /> : <FiMenu size={24} color="#ffffff" />}
        </button>

        {/* Menu DESKTOP */}
        <nav className={styles.navbar__nav}>
          <ul className={styles.navbar__list}>
            <li>
              <NavLink to="/" end className={styles.navbar__link}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={styles.navbar__link}>
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={styles.navbar__link}>
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={styles.navbar__link}>
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu MOBILE (overlay) */}
      <nav
        className={`${styles.mobileMenu} ${
          isMenuOpen ? styles["mobileMenu--open"] : ""
        }`}
      >
        <div
          className={styles.mobileMenu__content}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.mobileMenu__list}>
            <li>
              <NavLink
                to="/"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
