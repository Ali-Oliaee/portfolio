import './style.scss'

function ContactCard({
  icon, title, text, className,
}) {
  return (
    <div className={className ?? 'contact-card'}>
      <span className="card-icon">{icon}</span>
      <div>
        <h2>{title}</h2>
        <h5 className="contact-info">{text}</h5>
      </div>
    </div>
  )
}

export default ContactCard
