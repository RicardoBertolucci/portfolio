import photo from "../../assets/img/home/photo.jpeg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.home__container}>
        <h2 className={styles.home__headline}>
          Desenvolvedor Full Stack com foco em Back-end (Node.js)
        </h2>
        <p className={styles.home__description}>
          Experiência em desenvolvimento de aplicações web, com base sólida em
          front-end e foco atual em back-end, atuando na construção de APIs,
          integrações e sistemas escaláveis.
        </p>
        <div className={styles.home__buttons}>
          <button className={styles.home__projects}>Ver projetos</button>
          <button className={styles.home__contact}>Entre em contato</button>
        </div>
      </div>
      <img
        className={styles.home__image}
        src={photo}
        alt="Foto de Ricardo Bertolucci"
      />
    </section>
  );
};

export default Home;
