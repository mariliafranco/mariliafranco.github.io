import React from "react";
import {
  MailFilled,
  LinkedinOutlined,
  CloudDownloadOutlined,
  GithubOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import "./Contact.scss";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();

  const resumePath =
    i18n.language === "pt-BR" || i18n.language === "pt-PT"
      ? "../../assets/Marilia-Franco-Desenvolvedora-Frontend.pdf"
      : "../../assets/Marilia-Franco-Frontend.pdf";

  return (
    <div id="contact" className="contact-section">
      <h2>{t("contact.title")}</h2>
      <p className="contact-content">
        <MailFilled />{" "}
        <a href="mailto:marilia.andrad@gmail.com">marilia.andrad@gmail.com</a>
      </p>

      <p className="contact-content">
        <LinkedinOutlined />
        <a href="https://www.linkedin.com/in/mar%C3%ADlia-franco-de-andrade/">
          {t("contact.content.linkedin.linkText")}
        </a>
      </p>
      <p className="contact-content">
        <GithubOutlined />
        <a href="https://github.com/mariliafranco">
          {" "}
          {t("contact.content.github.linkText")}
        </a>
      </p>
      <p className="contact-content">
        <CloudDownloadOutlined />
        <a href={resumePath} download>
          {t("contact.content.resume.linkText")}
        </a>
      </p>
      <p className="contact-content">
        <WhatsAppOutlined />
        <a
          href="https://wa.me/19996527795?text=Hello%20Marilia!%20I%20went%20from%20your%20website."
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </p>
    </div>
  );
};

export default Contact;
