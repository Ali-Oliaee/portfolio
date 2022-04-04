import { Button } from "@mui/material";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; Ali Oliaee | created by
        <Button size="large" href="https://reactjs.org/">
          React
        </Button>
        and
        <Button size="large" href="https://mui.com/">
          MUI
        </Button>
      </p>
    </footer>
  );
};

export default Footer;
