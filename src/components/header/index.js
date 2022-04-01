import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import "./style.scss";

const Header = () => {
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
    <div className="header">
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

export default Header;
