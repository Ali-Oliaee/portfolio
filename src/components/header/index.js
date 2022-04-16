import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CallIcon from "@mui/icons-material/Call";
import HomeIcon from "@mui/icons-material/Home";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SwitchLanguage from "../switch-language";
import i18n from "../../utils/i18n";
import { useTranslation } from "react-i18next";
import "./style.scss";

const DesktopHeader = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  const LinkTab = (props) => (
    <Tab
      onClick={(event) => event.preventDefault}
      {...props}
      LinkComponent={Link}
      to={props.to}
    />
  );

  return (
    <div className="desktop-header">
      <Tabs
        value={value}
        onChange={handleChange}
        className="tabs"
        textColor="primary"
        indicatorColor="primary"
      >
        <LinkTab label={t("home")} to="/portfolio" />
        <LinkTab label={t("about")} to="/portfolio/about" />
        <LinkTab label={t("resume")} to="/portfolio/resume" />
        <LinkTab label={t("portfolio")} to="/portfolio/projects" />
        <LinkTab label={t("contact")} to="/portfolio/contact" />
      </Tabs>
      <SwitchLanguage />
    </div>
  );
};

const MobileHeader = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  return (
    <div className="mobile-header">
      <IconButton onClick={() => setVisible(true)}>
        <MenuIcon className="burger-icon" />
      </IconButton>
      <Drawer
        anchor={i18n.dir() === "rtl" ? "right" : "left"}
        open={visible}
        onClose={() => setVisible(false)}
        className="mobile-header-drawer"
      >
        <List className="list">
          <ListItem
            button
            component={Link}
            to="/portfolio/projects"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t("home")} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/portfolio/about"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("about")} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/portfolio/resume"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <FeedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t("resume")} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/portfolio"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <ArrowCircleDownIcon />
            </ListItemIcon>
            <ListItemText primary={t("portfolio")} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/portfolio/contact"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary={t("contact")} />
          </ListItem>
        </List>
        <SwitchLanguage className="mobile-header-switch-language" />
      </Drawer>
    </div>
  );
};

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 680px)");

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
