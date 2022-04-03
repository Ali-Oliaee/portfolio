import Button from "@mui/material/Button";
import "./style.scss";

const ProjectCard = ({ src, alt, title, description, demo, code }) => {
  return (
    <div className="project-card">
      <img src={src} alt={alt} />
      <div className="description-bar">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-container">
          <a href={demo} target="_blank" rel="noreferrer">
            <Button>Demo</Button>
          </a>
          <a href={code} target="_blank" rel="noreferrer">
            <Button>Source code</Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
