import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import ExtensionIcon from "@mui/icons-material/Extension";
import InterestCard from "../../components/interest-card";
import GitHubIcon from "@mui/icons-material/GitHub";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import "./style.scss";

const AboutPage = () => {
  return (
    <div className="about-page">
      <h1 className="title">About me</h1>
      <div className="description">
        <h3>&#128075;&#128512;Hi</h3>
        <p>
          My name is Ali Oliaee and I am studying for a bachelor's degree in
          computer engineering at Qiet University.I was born at dec 20, 2001.
          I'm interested messing with computers and tech stuff. The purpose of
          this portfolio is the presentation of the personal projects I have
          worked on, and the skills I have acquired over the years.
        </p>
        <p>
          if you have any questions or criticism, Do not delay and contact me.
        </p>
      </div>
      <div className="interests">
        <h2>Interests</h2>
        <div className="card-container">
          <InterestCard icon={<SportsEsportsIcon />} title="Video Games" />
          <InterestCard icon={<AudiotrackIcon />} title="Playing guitar" />
          <InterestCard icon={<ExtensionIcon />} title="Solving puzzles" />
          <InterestCard icon={<LocalMoviesIcon />} title="Watching movies" />
          <InterestCard icon={<GitHubIcon />} title="Open source" />
          <InterestCard icon={<DirectionsWalkIcon />} title="Walking" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
