import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useMediaQuery } from "usehooks-ts";
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

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  return (
    <div className="desktop-header">
      <Tabs
        value={value}
        onChange={handleChange}
        className="tabs"
        aria-label="nav tabs example"
        textColor="primary"
        indicatorColor="primary"
      >
        <LinkTab label="Home" />
        <LinkTab label="About" />
        <LinkTab label="Resume" />
        <LinkTab label="Portfolio" />
        <LinkTab label="Contact" />
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <FeedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <ArrowCircleDownIcon />
            </ListItemIcon>
            <ListItemText primary="Portfolio" />
          </ListItem>
          <ListItem button>
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
