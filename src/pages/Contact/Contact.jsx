import { useState } from "react";
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiCheckCircle,
  FiAlertCircle,
} from "react-icons/fi";
import styles from "./Contact.module.css";
import { useInViewport } from "../../hooks/useInViewport";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [ref, isVisible] = useInViewport();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus("error");
      return;
    }

    const form = event.target;
    const formData = new FormData(form);

    // honeypot: bots costumam preencher campos ocultos
    if (formData.get("botcheck")) {
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "Novo contato pelo portfólio");
    formData.append("from_name", "Portfólio Ricardo.dev");

    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`${styles.contact} reveal ${isVisible ? "reveal--visible" : ""}`}
    >
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
        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <h4>Envie sua mensagem</h4>

          <input
            type="checkbox"
            name="botcheck"
            className={styles.contact__honeypot}
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
          />

          <label>
            Nome*
            <input type="text" name="name" required />
          </label>

          <label>
            E-mail*
            <input type="email" name="email" required />
          </label>

          <label>
            Mensagem*
            <textarea
              name="message"
              rows="4"
              placeholder="Descreva um pouco do seu projeto..."
              required
            />
          </label>

          <button type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Enviando..." : "Enviar mensagem"}
          </button>

          {status === "success" && (
            <p className={`${styles.contact__feedback} ${styles["contact__feedback--success"]}`}>
              <FiCheckCircle aria-hidden="true" />
              Mensagem enviada! Retorno em breve.
            </p>
          )}

          {status === "error" && (
            <p className={`${styles.contact__feedback} ${styles["contact__feedback--error"]}`}>
              <FiAlertCircle aria-hidden="true" />
              Não foi possível enviar agora. Tente novamente ou use o e-mail ao lado.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
