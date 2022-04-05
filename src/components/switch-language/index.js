import i18n from "../../utils/i18n";
import "./style.scss";

const SwitchLanguage = () => {
  return (
    <div className="switch-language">
      <button onClick={() => i18n.changeLanguage("fa")}>fa</button>
      <button onClick={() => i18n.changeLanguage("en")}>en</button>
    </div>
  );
};

export default SwitchLanguage;
