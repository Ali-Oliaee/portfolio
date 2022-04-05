import { useTranslation } from "react-i18next";
import SocialButtons from "../../components/social-media";
import SwitchLanguage from "../../components/switch-language";
import "./style.scss";

const HomePage = () => {
  const { t } = useTranslation();
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
