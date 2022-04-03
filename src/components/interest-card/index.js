import "./style.scss";

const InterestCard = ({ icon, title }) => {
  return (
    <div className="interest-card">
      <div className="card-icon">{icon}</div>
      <h5 className="card-title">{title}</h5>
    </div>
  );
};

export default InterestCard;
