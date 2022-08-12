import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import './style.scss'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="footer">
      <p>
        &copy;
        {' '}
        {t('footer')}
        <Button size="large" href="https://reactjs.org/" target="_blank">
          React
        </Button>
        {t('and')}
        <Button size="large" href="https://mui.com/" target="_blank">
          MUI
        </Button>
      </p>
    </footer>
  )
}

export default Footer
