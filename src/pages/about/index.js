import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ExtensionIcon from "@mui/icons-material/Extension";
import InterestCard from "../../components/interest-card";
import GitHubIcon from "@mui/icons-material/GitHub";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.scss";

const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <div className="about-page">
      <h1 className="title">{t("about-title")}</h1>
      <div className="description">
        <h3>&#128075;&#128512;{t("Hi")}</h3>
        <p>{t("about-description")} </p>
        <p>
          {t("contact-text")}
          <Button to="/contact" LinkComponent={Link}>
            {t("contact-me")}
          </Button>
        </p>
      </div>
      <div className="interests">
        <h2>{t("interests")}</h2>
        <div className="card-container">
          <InterestCard icon={<SportsEsportsIcon />} title={t("games")} />
          <InterestCard icon={<AudiotrackIcon />} title={t("music")} />
          <InterestCard icon={<ExtensionIcon />} title={t("puzzle")} />
          <InterestCard icon={<LocalMoviesIcon />} title={t("movies")} />
          <InterestCard icon={<GitHubIcon />} title={t("open-source")} />
          <InterestCard icon={<DirectionsWalkIcon />} title={t("walking")} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
