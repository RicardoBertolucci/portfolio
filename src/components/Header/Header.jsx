import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
      className={`${styles.navbar} ${isScrolled ? styles["navbar--scrolled"] : ""
        }`}
    >
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
          {isMenuOpen ? <FiX size={24} color="#ffffff"/> : <FiMenu size={24} color="#ffffff" />}
        </button>

        {/* Menu DESKTOP */}
        <nav className={styles.navbar__nav}>
          <ul className={styles.navbar__list}>
            <li>
              <a href="#home" className={styles.navbar__link}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.navbar__link}>
                Sobre
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.navbar__link}>
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.navbar__link}>
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menu MOBILE (overlay) */}
      <nav
        className={`${styles.mobileMenu} ${isMenuOpen ? styles["mobileMenu--open"] : ""
          }`}
      >
        <div
          className={styles.mobileMenu__content}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className={styles.mobileMenu__list}>
            <li>
              <a
                href="#home"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={styles.mobileMenu__link}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
