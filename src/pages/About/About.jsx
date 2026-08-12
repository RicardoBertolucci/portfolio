import styles from "./About.module.css";
import { useInViewport } from "../../hooks/useInViewport";

import { FaNodeJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const About = () => {
  const [ref, isVisible] = useInViewport();

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about} reveal ${isVisible ? "reveal--visible" : ""}`}
    >
      <h3 className={styles.about__title}>Sobre mim</h3>

      <p className={styles.about__text}>
        Sou desenvolvedor Full Stack com experiência prática em front-end
        (React, Next.js) nos últimos anos, e contato com back-end em Node.js.
        Estou aprofundando esses conhecimentos através de uma trilha própria
        de projetos, com foco em consolidar fundamentos antes de avançar para
        tópicos mais complexos.
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
        href="/Ricardo_Bertolucci.pdf"
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