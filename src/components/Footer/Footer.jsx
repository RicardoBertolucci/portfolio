import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__brand}>
          Ricardo<span>.dev</span>
        </div>

        <p className={styles.footer__copy}>
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        <div className={styles.footer__social}>
          <a href="https://github.com/RicardoBertolucci" aria-label="Github">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-bertolucci/"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=ric.bertolucci@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
