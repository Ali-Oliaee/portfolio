import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import "./style.scss";

const ProjectCard = ({ src, title, description, demo, code, disableDemo, className }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`project-card ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="description-bar">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card-button-container">
          <Button disabled={disableDemo} href={demo} target="_blank">
            {t("demo")}
          </Button>
          <Button href={code} target="_blank">
            {t("source-code")}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
