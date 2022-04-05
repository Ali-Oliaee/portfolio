import ContactCard from "../../components/contact-card";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SocialButtons from "../../components/social-media";
import { useTranslation } from "react-i18next";
import "./style.scss";

const ContactPage = () => {
  const { t } = useTranslation();
  return (
    <div className="contact-page">
      <h1>{t("contact-me")}</h1>
      <p>{t("contact-description")}</p>
      <div className="cards-container">
        <ContactCard
          icon={<EmailIcon />}
          title={t("email")}
          text="alioiaee31@gmail.com"
        />
        <ContactCard
          icon={<CallIcon />}
          title={t("call")}
          text={t("phone-number")}
        />
        <ContactCard
          icon={<LocationOnIcon />}
          title={t("location")}
          text={t("my-location")}
        />
        <ContactCard
          icon={<EmojiPeopleIcon />}
          title={t("social-media")}
          text={<SocialButtons className="social" />}
          className="social-card"
        />
      </div>
    </div>
  );
};

export default ContactPage;
