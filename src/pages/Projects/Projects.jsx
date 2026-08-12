import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";
import { useInViewport } from "../../hooks/useInViewport";

// imagens dos projetos - Fase 1 (Trilha)
import calculadora from "../../assets/img/projects/Calculadora.png";
import listaDeTarefas from "../../assets/img/projects/ListaDeTarefas.png";
import quiz from "../../assets/img/projects/Quiz.png";

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
  const [trilhaRef, trilhaVisible] = useInViewport();
  const [othersRef, othersVisible] = useInViewport();

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projects__title}>Projetos</h2>

      <div
        ref={trilhaRef}
        className={`${styles.projects__group} reveal ${
          trilhaVisible ? "reveal--visible" : ""
        }`}
      >
        <h3 className={styles.projects__groupTitle}>
          Fase 1 <span>— Fundamentos</span>
        </h3>
        <div className={styles.projects__grid}>
          {trilhaProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>

      <div
        ref={othersRef}
        className={`${styles.projects__group} reveal ${
          othersVisible ? "reveal--visible" : ""
        }`}
      >
        <h3 className={styles.projects__groupTitle}>Outros projetos</h3>
        <div className={styles.projects__grid}>
          {otherProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
