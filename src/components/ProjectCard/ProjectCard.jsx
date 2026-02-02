import styles from "./ProjectCard.module.css";

const ProjectCard = ({ title, image, techs, live, repo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img src={image} alt={title} />

        <div className={styles.card__overlay}>
          <a href={live} target="_blank" rel="noreferrer">
            Ver projeto
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            Repositório
          </a>
        </div>
      </div>

      <h3 className={styles.card__title}>{title}</h3>
      <span className={styles.card__techs}>{techs}</span>
    </div>
  );
};

export default ProjectCard;
