import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SmoothList from 'react-smooth-list'
import { PageWrapper, ProjectCard } from '../../components'
import useProjects from '../../hooks/use-projects'
import './style.scss'

function PortfolioPage() {
  const { t } = useTranslation()
  const projects = useProjects()

  return (
    <PageWrapper className="portfolio-page">
      <SmoothList>
        <h1>{t('portfolio')}</h1>
        <div className="container">
          <div className="projects-container">
            {projects
              .reverse()
              .map(({ title, description, demo, code, src }) => (
                <ProjectCard
                  title={title}
                  src={src}
                  description={description}
                  demo={demo}
                  key={title}
                  code={code}
                />
              ))}
          </div>
        </div>
        <div className="center">
          <Button
            href="https://github.com/ali-oliaee?tab=repositories"
            target="_blank"
          >
            {t('show-all')}
          </Button>
        </div>
      </SmoothList>
    </PageWrapper>
  )
}

export default PortfolioPage
