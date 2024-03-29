import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import AudiotrackIcon from '@mui/icons-material/Audiotrack'
import ExtensionIcon from '@mui/icons-material/Extension'
import GitHubIcon from '@mui/icons-material/GitHub'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies'
import { Link } from 'react-router-dom'
import { Button, Divider, Avatar } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SmoothList from 'react-smooth-list'
import myPicture from '../../assets/images/mine.jpeg'
import { InterestCard, PageWrapper } from '../../components'
import './style.scss'

function AboutPage() {
  const { t } = useTranslation()

  return (
    <PageWrapper className="about-page">
      <SmoothList>
        <h1 className="title">{t('about-title')}</h1>
        <div className="description">
          <Divider className="divider">
            <Avatar
              src={myPicture}
              alt="my pic"
              sx={{ width: 140, height: 140 }}
            />
          </Divider>
          <h3>{t('Hi')}</h3>
          <p>{t('about-description')}</p>
          <p>
            {t('contact-text')}
            <Button to="/contact" LinkComponent={Link}>
              {t('contact-me')}
            </Button>
          </p>
        </div>
      </SmoothList>
      <div className="interests">
        <SmoothList delay={200}>
          <h2>{t('interests')}</h2>
          <div className="card-container">
            <InterestCard icon={<SportsEsportsIcon />} title={t('games')} />
            <InterestCard icon={<AudiotrackIcon />} title={t('music')} />
            <InterestCard icon={<ExtensionIcon />} title={t('puzzle')} />
            <InterestCard icon={<LocalMoviesIcon />} title={t('movies')} />
            <InterestCard icon={<GitHubIcon />} title={t('open-source')} />
            <InterestCard icon={<DirectionsWalkIcon />} title={t('walking')} />
          </div>
        </SmoothList>
      </div>
    </PageWrapper>
  )
}

export default AboutPage
