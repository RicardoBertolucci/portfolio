import styles from "./About.module.css";

import { FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTypescript } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h3 className={styles.about__title}>Sobre mim</h3>

      <p className={styles.about__text}>
        Sou desenvolvedor Full Stack com experiência em aplicações web, atuando
        principalmente no front-end nos últimos anos. No momento, estou em transição
        de carreira com foco em back-end, aprofundando conhecimentos em Node.js,
        construção de APIs, integrações e arquitetura de sistemas.
      </p>

      <p className={styles.about__text}>
        Busco oportunidades onde possa evoluir tecnicamente, contribuir com
        soluções bem estruturadas e crescer junto com o time.
      </p>

      <p className={styles.about__text}>
        Tenho interesse especial em boas práticas, código limpo, versionamento e
        arquitetura de aplicações, buscando sempre soluções simples, escaláveis e
        bem documentadas.
      </p>

      <a
        href="/Ricardo_Bertolucci_Desenvolvedor_Backend.pdf"
        download
        className={styles.about__button}
      >
        Download CV
      </a>

      <h3 className={styles.about__subtitle}>Habilidades</h3>

      <ul className={styles.about__skills}>
        <li className={styles.about__skill}>
          <FaNodeJs className={styles.about__icon} />
          <p className={styles.about__label}>NodeJS</p>
        </li>

        <li className={styles.about__skill}>
          <SiJavascript className={styles.about__icon} />
          <p className={styles.about__label}>JavaScript</p>
        </li>

        <li className={styles.about__skill}>
          <SiTypescript className={styles.about__icon} />
          <p className={styles.about__label}>TypeScript</p>
        </li>

        <li className={styles.about__skill}>
          <FaReact className={styles.about__icon} />
          <p className={styles.about__label}>React</p>
        </li>

        <li className={styles.about__skill}>
          <FaGitAlt className={styles.about__icon} />
          <p className={styles.about__label}>Git</p>
        </li>

        <li className={styles.about__skill}>
          <FaGithub className={styles.about__icon} />
          <p className={styles.about__label}>GitHub</p>
        </li>
      </ul>
    </section>
  );
};

export default About;