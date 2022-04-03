import ProjectCard from "../../components/project-view-card";
import LovePage from "../../assets/images/love-page.png";
import adv from "../../assets/images/advice-generator.png";
import "./style.scss";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <div className="container">
        <ProjectCard
          src={LovePage}
          alt="love-page"
          title="Love Page"
          description="a simple page with animation good for sending to friends"
          demo="https://ali80-sys.github.io/Love-page/"
          code="https://github.com/ali80-sys/Love-page/"
        />
        <ProjectCard
          src={adv}
          alt="love-page"
          title="Love Page"
          description="a simple page with animation good for sending to friends"
          demo="https://ali80-sys.github.io/Love-page/"
          code="https://github.com/ali80-sys/Love-page/"
        />
      </div>
    </div>
  );
};

export default PortfolioPage;
