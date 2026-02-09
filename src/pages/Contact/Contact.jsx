import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      {/* Header da seção */}
      <div className={styles.contact__header}>
        <span className={styles.contact__eyebrow}>Vamos conversar</span>
        <h2 className={styles.contact__title}>Entre em contato</h2>
      </div>

      <div className={styles.contact__content}>
        {/* LADO ESQUERDO */}
        <div className={styles.contact__info}>
          <h3 className={styles.contact__subtitle}>
            Pronto para transformar suas ideias em realidade?
          </h3>

          <p className={styles.contact__text}>
            Estou disponível para novos projetos, freelas ou oportunidades.
            Vamos conversar sobre como posso ajudar a construir soluções
            eficientes e escaláveis.
          </p>

          <div className={styles.contact__details}>
            <p>
              <FiMail /> ric.bertolucci@gmail.com
            </p>
            <p>
              <FiMapPin /> São Paulo – Brasil
            </p>
          </div>

          <div className={styles.contact__socials}>
            <a href="https://github.com/RicardoBertolucci" target="_blank" rel="noreferrer">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/ricardo-bertolucci/" target="_blank" rel="noreferrer">
              <FiLinkedin />
            </a>
          </div>
        </div>

        {/* LADO DIREITO */}
        <form className={styles.contact__form}>
          <h4>Envie sua mensagem</h4>

          <label>
            Nome*
            <input type="text" required />
          </label>

          <label>
            E-mail*
            <input type="email" required />
          </label>

          <label>
            Mensagem*
            <textarea rows="4" placeholder="Descreva um pouco do seu projeto..." />
          </label>

          <button type="submit">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
