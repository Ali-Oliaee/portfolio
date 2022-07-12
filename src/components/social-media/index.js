import IconButton from "@mui/material/IconButton";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { LinkedIn } from "@mui/icons-material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoogleIcon from "@mui/icons-material/Google";
import { ReactComponent as GitlabLogo } from "../../assets/images/gitlab-logo.svg";
import { ReactComponent as QueraLogo } from "../../assets/images/quera-logo.svg";
import "./style.scss";

const SocialButtons = ({ className }) => {
  return (
    <div className={className ?? "social-media"}>
      <IconButton
        className="icon-button"
        href="https://github.com/ali-oliaee"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://linkedin.com/in/ali-oliaee"
        target="_blank"
      >
        <LinkedIn />
      </IconButton>
      <IconButton
        className="icon-button"
        href="https://gitlab.com/alioliaee31"
        target="_blank"
      >
        <GitlabLogo className="icon" />
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
      <IconButton
        className="icon-button"
        href="https://quera.org/profile/mrv9bp"
        target="_blank"
      >
        <QueraLogo className="icon-button" />
      </IconButton>
    </div>
  );
};

export default SocialButtons;
