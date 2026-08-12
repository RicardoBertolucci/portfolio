import { useRef } from "react";
import { motion as Motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import styles from "./ProjectCard.module.css";

const TECH_ICONS = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
};

const ProjectCard = ({ title, image, techs, live, repo, index = 0 }) => {
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), {
    stiffness: 260,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), {
    stiffness: 260,
    damping: 22,
  });

  const handleMouseMove = (event) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    mouseX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    mouseY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const techList = techs.split("|").map((tech) => tech.trim());

  return (
    <Motion.div
      ref={cardRef}
      className={styles.card}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <div className={styles.card__imageWrapper}>
        <img src={image} alt={title} loading="lazy" />

        <div className={styles.card__overlay}>
          <a href={live} target="_blank" rel="noreferrer">
            <FiExternalLink aria-hidden="true" />
            Ver projeto
          </a>
          <a href={repo} target="_blank" rel="noreferrer">
            <FiGithub aria-hidden="true" />
            Repositório
          </a>
        </div>
      </div>

      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{title}</h3>

        <ul className={styles.card__techs}>
          {techList.map((tech) => {
            const Icon = TECH_ICONS[tech];
            return (
              <li key={tech} className={styles.card__tech}>
                {Icon && <Icon aria-hidden="true" />}
                {tech}
              </li>
            );
          })}
        </ul>
      </div>
    </Motion.div>
  );
};

export default ProjectCard;