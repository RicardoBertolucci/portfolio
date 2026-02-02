import ProjectCard from "../../components/ProjectCard/ProjectCard";
import styles from "./Projects.module.css";

// imagens dos projetos
import refund from "../../assets/img/projects/Refund.png";

const Projects = () => {
  const projects = [
    {
      title: "Refund",
      image: refund,
      techs: "HTML | CSS | JavaScript",
      live: "https://ricardobertolucci.github.io/Refund/",
      repo: "https://github.com/RicardoBertolucci/Refund",
    },
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.projects__title}>Projetos</h2>

      <div className={styles.projects__grid}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            techs={project.techs}
            live={project.live}
            repo={project.repo}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
