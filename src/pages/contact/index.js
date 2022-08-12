import EmailIcon from '@mui/icons-material/Email'
import CallIcon from '@mui/icons-material/Call'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { useTranslation } from 'react-i18next'
import SmoothList from 'react-smooth-list'
import SocialButtons from '../../components/social-media'
import ContactCard from '../../components/contact-card'
import PageWrapper from '../../components/page-wrapper'
import './style.scss'

function ContactPage() {
  const { t } = useTranslation()
  return (
    <PageWrapper className="contact-page">
      <SmoothList>
        <h1>{t('contact-me')}</h1>
        <p>{t('contact-description')}</p>
        <div className="cards-container">
          <ContactCard
            icon={<EmailIcon />}
            title={t('email')}
            text="alioliaee31@gmail.com"
          />
          <ContactCard
            icon={<CallIcon />}
            title={t('call')}
            text={t('phone-number')}
          />
          <ContactCard
            icon={<LocationOnIcon />}
            title={t('location')}
            text={t('my-location')}
          />
          <ContactCard
            icon={<EmojiPeopleIcon />}
            title={t('social-media')}
            text={<SocialButtons className="social" />}
            className="social-card"
          />
        </div>
      </SmoothList>
    </PageWrapper>
  )
}

export default ContactPage
