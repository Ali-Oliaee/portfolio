import "./style.scss";

const ContactCard = ({ icon, title, text }) => {
  return (
    <div className="contact-card">
      <span className="icon">{icon}</span>
      <div>
        <h2>{title}</h2>
        <h5 className="contact-info">{text}</h5>
      </div>
    </div>
  );
};

export default ContactCard;
