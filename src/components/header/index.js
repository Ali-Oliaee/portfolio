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
import "./style.scss";

const DesktopHeader = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        <LinkTab label="Home" to="/" />
        <LinkTab label="About" to="/about" />
        <LinkTab label="Resume" to="/resume" />
        <LinkTab label="Portfolio" to="/portfolio" />
        <LinkTab label="Contact" to="/contact" />
      </Tabs>
    </div>
  );
};

const MobileHeader = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="mobile-header">
      <IconButton onClick={() => setVisible(true)}>
        <MenuIcon className="burger-icon" />
      </IconButton>
      <Drawer
        anchor="left"
        open={visible}
        onClose={() => setVisible(false)}
        className="mobile-header-drawer"
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/about"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/resume"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <FeedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Resume" />
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
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

const Header = () => {
  const isMobile = useMediaQuery("(max-width: 500px)");

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
};

export default Header;
