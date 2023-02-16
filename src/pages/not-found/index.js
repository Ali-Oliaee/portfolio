import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PageWrapper } from '../../components'
import './style.scss'

function NotFoundPage() {
  const { t } = useTranslation()
  return (
    <PageWrapper className="not-found-page">
      <h1>{t('404')}</h1>
      <p>{t('404-description')}</p>
      <Button variant="outlined" to="/" component={Link}>
        {t('back-to-home')}
      </Button>
    </PageWrapper>
  )
}

export default NotFoundPage
