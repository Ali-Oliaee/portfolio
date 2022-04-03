import SocialButtons from "../../components/social-media";
import "./style.scss";

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="name">
        Ali <span className="family">Oliaee</span>
      </h1>
      <p className="description">Front-end developer and a codeholic person</p>
      <SocialButtons />
    </div>
  );
};

export default HomePage;
