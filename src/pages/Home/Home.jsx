import { motion as Motion } from "framer-motion";
import { FiArrowRight, FiMail } from "react-icons/fi";
import photo from "../../assets/img/home/photo.jpeg";
import styles from "./Home.module.css";

const Home = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className={styles.home}>
      <Motion.div
        className={styles.home__container}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.home__badge}>
          <span className={styles.home__badgeDot} />
          Aberto a novas oportunidades
        </span>

        <h2 className={styles.home__headline}>
          Desenvolvedor Full Stack
        </h2>
        <p className={styles.home__description}>
          Experiência prática em front-end (React, Next.js) construindo
          interfaces modernas e performáticas, com contato em back-end
          (Node.js) e aprofundamento contínuo através de uma trilha própria
          de projetos.
        </p>
        <div className={styles.home__buttons}>
          <button
            className={styles.home__projects}
            onClick={() => scrollToSection("projects")}
            type="button"
          >
            Ver projetos
            <FiArrowRight aria-hidden="true" />
          </button>
          <button
            className={styles.home__contact}
            onClick={() => scrollToSection("contact")}
            type="button"
          >
            <FiMail aria-hidden="true" />
            Entre em contato
          </button>
        </div>
      </Motion.div>

      <Motion.div
        className={styles.home__imageWrapper}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      >
        <img
          className={styles.home__image}
          src={photo}
          alt="Foto de Ricardo Bertolucci"
        />
      </Motion.div>
    </section>
  );
};

export default Home;
