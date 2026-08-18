import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

// imagens dos projetos - Fase 1 (Trilha)
import calculadora from "../../assets/img/projects/Calculadora.png";
import listaDeTarefas from "../../assets/img/projects/ListaDeTarefas.png";
import quiz from "../../assets/img/projects/Quiz.png";
import galeria from "../../assets/img/projects/Galeria.jpg";

// imagens dos projetos - outros
import refund from "../../assets/img/projects/Refund.png";
import numberGenerator from "../../assets/img/projects/NumberGenerator.png";

const trilhaProjects = [
  {
    title: "Calculadora",
    image: calculadora,
    techs: "HTML | CSS | JavaScript",
    live: "https://ricardobertolucci.github.io/Calculadora/",
    repo: "https://github.com/RicardoBertolucci/Calculadora",
  },
  {
    title: "Lista de Tarefas",
    image: listaDeTarefas,
    techs: "HTML | CSS | JavaScript",
    live: "https://ricardobertolucci.github.io/Lista-de-Tarefas/",
    repo: "https://github.com/RicardoBertolucci/Lista-de-Tarefas",
  },
  {
    title: "Quiz de Perguntas",
    image: quiz,
    techs: "HTML | CSS | JavaScript",
    live: "https://ricardobertolucci.github.io/Quiz-Perguntas/",
    repo: "https://github.com/RicardoBertolucci/Quiz-Perguntas",
  },
  {
    title: "Galeria de Imagens",
    image: galeria,
    techs: "HTML | CSS | JavaScript",
    live: "https://ricardobertolucci.github.io/Galeria-de-Imagens/",
    repo: "https://github.com/RicardoBertolucci/Galeria-de-Imagens",
  },
];

const otherProjects = [
  {
    title: "Refund",
    image: refund,
    techs: "HTML | CSS | JavaScript",
    live: "https://ricardobertolucci.github.io/Refund/",
    repo: "https://github.com/RicardoBertolucci/Refund",
  },
  {
    title: "Number Generator",
    image: numberGenerator,
    techs: "HTML | CSS | JavaScript",
    live: "https://ricardobertolucci.github.io/Sorteador-de-Numeros/",
    repo: "https://github.com/RicardoBertolucci/Sorteador-de-Numeros",
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projects__header}>
        <span className={styles.projects__eyebrow}>Portfólio</span>
        <h2 className={styles.projects__title}>Projetos</h2>
      </div>

      <div className={styles.projects__group}>
        <h3 className={styles.projects__groupTitle}>
          <span className={styles.projects__groupBadge}>01</span>
          Fase 1 <span className={styles.projects__groupMuted}>— Fundamentos</span>
        </h3>
        <div className={styles.projects__grid}>
          {trilhaProjects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>

      <div className={styles.projects__group}>
        <h3 className={styles.projects__groupTitle}>
          <span className={styles.projects__groupBadge}>02</span>
          Outros projetos
        </h3>
        <div className={styles.projects__grid}>
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
