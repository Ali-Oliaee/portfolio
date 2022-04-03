import ContactCard from "../../components/contact-card";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SocialButtons from "../../components/social-media";
import "./style.scss";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <h1>Contact me</h1>
      <p>you can contact me with this ways :)</p>
      <div className="cards-container">
        <ContactCard
          icon={<EmailIcon />}
          title="Email me"
          text="alioiaee31@gmail.com"
        />
        <ContactCard icon={<CallIcon />} title="Call me" text="+989105753695" />
        <ContactCard
          icon={<LocationOnIcon />}
          title="My location"
          text="Iran, Mashhad"
        />
        <ContactCard
          icon={<EmojiPeopleIcon />}
          title="Social media"
          text={<SocialButtons className="social" />}
        />
      </div>
    </div>
  );
};

export default ContactPage;
