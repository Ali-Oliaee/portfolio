import Button from '@mui/material/Button'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import './style.scss'

function ProjectCard({ src, title, description, demo, code, className }) {
  const { t } = useTranslation()
  return (
    <div className={`project-card ${className}`}>
      <LazyLoadImage
        src={src}
        height="100%"
        style={{
          objectFit: 'cover',
        }}
        alt="Image Alt"
      />
      <div className="description-bar">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-card-button-container">
          <Button disabled={!demo} href={demo} target="_blank">
            {t('demo')}
          </Button>
          <Button href={code} target="_blank">
            {t('source-code')}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
