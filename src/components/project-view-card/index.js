import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import notFound from "../../assets/images/not-found.png";
import "./style.scss";

const ProjectCard = ({ src, title, description, demo, code, disableDemo }) => {
  const { t } = useTranslation();
  return (
    <div
      className="project-card"
      style={{ backgroundImage: `url(${src ?? notFound})` }}
    >
      <div className="description-bar">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-container">
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
