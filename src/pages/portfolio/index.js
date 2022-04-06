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
import { useTranslation } from "react-i18next";
import SmoothList from "react-smooth-list";
import "./style.scss";

const PortfolioPage = () => {
  const { t } = useTranslation();
  return (
    <div className="portfolio-page">
      <SmoothList>
        <h1>{t("portfolio")}</h1>
        <div className="container">
          <ProjectCard
            src={phoneBook}
            title={t("phone-book")}
            description={t("phone-book-description")}
            code="https://github.com/ali80-sys/phoneBook/"
            disableDemo
          />
          <ProjectCard
            src={signupPage}
            title={t("signup-page")}
            description={t("signup-page-description")}
            demo="https://ali80-sys.github.io/signup-page/"
            code="https://github.com/ali80-sys/signup-page/"
          />
          <ProjectCard
            src={portfolio}
            title={t("portfolio")}
            description={t("portfolio-description")}
            demo="https://ali80-sys.github.io/Ali-Oliaee/"
            code="https://github.com/ali80-sys/Ali-Oliaee/"
          />
          <ProjectCard
            src={calculator}
            title={t("calculator")}
            description={t("calculator-description")}
            demo="https://ali80-sys.github.io/Calculator/"
            code="https://github.com/ali80-sys/Calculator/"
          />
          <ProjectCard
            title={t("news-site")}
            description={t("news-site-description")}
            code="https://github.com/ali80-sys/lorem-news/"
            disableDemo
          />
          <ProjectCard
            src={lovePage}
            title={t("love-page")}
            description={t("love-page-description")}
            demo="https://ali80-sys.github.io/Love-page/"
            code="https://github.com/ali80-sys/Love-page/"
          />
          <ProjectCard
            src={adviceGenerator}
            title={t("advice-generator")}
            description={t("advice-description")}
            demo="https://ali80-sys.github.io/advice-generator-app/"
            code="https://github.com/ali80-sys/advice-generator-app/"
          />
          <ProjectCard
            src={nftCard}
            title={t("nft-card")}
            description={t("nft-description")}
            demo="https://ali80-sys.github.io/NFT-card-component/"
            code="https://github.com/ali80-sys/NFT-card-component/"
          />
          <ProjectCard
            src={clock}
            title={t("digital-clock")}
            description={t("clock-description")}
            demo="https://ali80-sys.github.io/Digital-clock/"
            code="https://github.com/ali80-sys/Digital-clock/"
          />
          <ProjectCard
            src={aiPage}
            title={t("ai-page")}
            description={t("ai-page-description")}
            demo="https://ali80-sys.github.io/Single-webPage/"
            code="https://github.com/ali80-sys/Single-webPage/"
          />
          <ProjectCard
            src={instagramUi}
            title={t("instagram-ui")}
            description={t("instagram-ui-description")}
            // demo="https://ali80-sys.github.io/Instagram-UI/"
            code="https://github.com/ali80-sys/Instagram-UI/"
            disableDemo
          />

          <ProjectCard
            src={qrCard}
            title={t("qr-card")}
            description={t("qr-card-description")}
            demo="https://ali80-sys.github.io/QR-card-component/"
            code="https://github.com/ali80-sys/QR-card-component/"
          />
        </div>
        <div className="learn-more-button">
          <Button
            href="https://github.com/ali80-sys?tab=repositories"
            target="_blank"
          >
            {t("learn-more")}
          </Button>
        </div>
      </SmoothList>
    </div>
  );
};

export default PortfolioPage;
