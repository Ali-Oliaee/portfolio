import SmoothList from 'react-smooth-list'
import './style.scss'

function ExperienceItem({
  company,
  logo,
  link,
  role,
  date,
  description,
  delay,
}) {
  return (
    <SmoothList delay={delay}>
      <div className="experience-item">
        <a
          href={link}
          target="_blank"
          className="company-link"
          rel="noreferrer"
        >
          <img className="company-logo" src={logo} alt={`${company} logo`} />
        </a>
        <span className="company-name">{company}</span>
        <p className="role">{role}</p>
        <p className="date">{date}</p>
        <p>{description}</p>
      </div>
    </SmoothList>
  )
}

export default ExperienceItem
