import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import { ReactComponent as FrontendMentorLogo } from "../../assets/images/frontendmentor-logo.svg";
import { ReactComponent as GitlabLogo } from "../../assets/images/gitlab-logo.svg";
import "./style.scss";

const SocialButtons = ({ className }) => {
  return (
    <div className={className ?? "social-media"}>
      <IconButton
        className="icon-button"
        href="https://github.com/ali80-sys"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://gitlab.com/alioliaee31"
        target="_blank"
      >
        <GitlabLogo className="icon" />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://www.frontendmentor.io/profile/ali80-sys"
        target="_blank"
      >
        <FrontendMentorLogo className="icon" />
      </IconButton>
      <IconButton className="icon-button" href="mailto: alioliaee31@gmail.com>">
        <GoogleIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://t.me/anti_humanity"
        target="_blank"
      >
        <TelegramIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://www.instagram.com/ali._.oliaee/"
        target="_blank"
      >
        <InstagramIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href=" https://wa.me/989105753695"
        target="_blank"
      >
        <WhatsAppIcon />
      </IconButton>
    </div>
  );
};

export default SocialButtons;
