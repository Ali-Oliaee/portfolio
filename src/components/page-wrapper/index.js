import './style.scss'

function PageWrapper({ children, className }) {
  return (
    <div className={`page-wrapper ${className}`}>
      <div className="content">{children}</div>
    </div>
  )
}

export default PageWrapper
