import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import "./style.scss";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <p>
        &copy; {t("footer")}
        <Button size="large" href="https://reactjs.org/">
          React
        </Button>
        {t("and")}
        <Button size="large" href="https://mui.com/">
          MUI
        </Button>
      </p>
    </footer>
  );
};

export default Footer;
