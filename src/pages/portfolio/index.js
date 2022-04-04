import Button from "@mui/material/Button";
import ProjectCard from "../../components/project-view-card";
import phoneBook from "../../assets/images/phone-book.png";
import lovePage from "../../assets/images/love-page.png";
import adviceGenerator from "../../assets/images/advice-generator.png";
import nftCard from "../../assets/images/nft-card.png";
import aiPage from "../../assets/images/ai-page.png";
import calculator from "../../assets/images/calculator.png";
import instagramUi from "../../assets/images/instagram-ui.png";
import qrCard from "../../assets/images/qr-card.png";
import signupPage from "../../assets/images/signup-page.png";
import clock from "../../assets/images/digital-clock.png";
import portfolio from "../../assets/images/portfolio.png";
import "./style.scss";

const PortfolioPage = () => {
  return (
    <div className="portfolio-page">
      <h1>Portfolio</h1>
      <div className="container">
        <ProjectCard
          src={phoneBook}
          title="Phone Book"
          description="A phone book application that allows users to add, edit, and delete contacts. crud on sql using node js and help ant design library for ui."
          code="https://github.com/ali80-sys/phoneBook/"
          disableDemo
        />
        <ProjectCard
          src={signupPage}
          title="Signup page"
          description="A signup page for a user to signup and create an account, a challenge from frontend mentor website. created by react and ant design library."
          demo="https://ali80-sys.github.io/signup-page/"
          code="https://github.com/ali80-sys/signup-page/"
        />
        <ProjectCard
          src={portfolio}
          title="Portfolio"
          description="My portfolio website, created by react and MUI library. internationalized with i18next."
          demo="https://ali80-sys.github.io/Ali-Oliaee/"
          code="https://github.com/ali80-sys/Ali-Oliaee/"
        />
        <ProjectCard
          src={calculator}
          title="Calculator"
          description="A simple calculator that I made for fun contains oop javascript and neumorphism design."
          demo="https://ali80-sys.github.io/Calculator/"
          code="https://github.com/ali80-sys/Calculator/"
        />
        <ProjectCard
          title="News website"
          description="A news website with signup and login form, based on typescript, react. designed by ant design library and get content from fakerjs."
          code="https://github.com/ali80-sys/lorem-news/"
          disableDemo
        />
        <ProjectCard
          src={lovePage}
          title="Love Page"
          description="A simple HTML document that allows users to add their own messages to the page."
          demo="https://ali80-sys.github.io/Love-page/"
          code="https://github.com/ali80-sys/Love-page/"
        />
        <ProjectCard
          src={adviceGenerator}
          title="Advice Generator"
          description="It's a challenge from frontend mentor website, that generates random advice for users.with the help of API."
          demo="https://ali80-sys.github.io/advice-generator-app/"
          code="https://github.com/ali80-sys/advice-generator-app/"
        />
        <ProjectCard
          src={nftCard}
          title="NFT Card"
          description="It's a challenge from frontend mentor website, a simple preview of NFT card."
          demo="https://ali80-sys.github.io/NFT-card-component/"
          code="https://github.com/ali80-sys/NFT-card-component/"
        />
        <ProjectCard
          src={clock}
          title="Digital Clock"
          description="Just a simple clock with extra feature :)"
          demo="https://ali80-sys.github.io/Digital-clock/"
          code="https://github.com/ali80-sys/Digital-clock/"
        />
        <ProjectCard
          src={aiPage}
          title="AI Page"
          description="My first project that I uploaded to GitHub. It is a simple page that has information about artificial intelligence."
          demo="https://ali80-sys.github.io/Single-webPage/"
          code="https://github.com/ali80-sys/Single-webPage/"
        />
        <ProjectCard
          src={instagramUi}
          title="Instagram UI"
          description="Just a simple UI that I made for Instagram. images are not loaded because Fakerjs library broke down. :("
          // demo="https://ali80-sys.github.io/Instagram-UI/"
          code="https://github.com/ali80-sys/Instagram-UI/"
          disableDemo
        />

        <ProjectCard
          src={qrCard}
          title="QR Card"
          description="It's a challenge from frontend mentor website, a simple preview of QR card."
          demo="https://ali80-sys.github.io/QR-card-component/"
          code="https://github.com/ali80-sys/QR-card-component/"
        />
      </div>
      <div className="learn-more-button">
        <Button
          href="https://github.com/ali80-sys?tab=repositories"
          target="_blank"
        >
          Learn more...
        </Button>
      </div>
    </div>
  );
};

export default PortfolioPage;
