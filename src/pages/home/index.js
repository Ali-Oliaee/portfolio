import { useTranslation } from 'react-i18next'
import Particles from 'react-tsparticles'
import { loadTrianglesPreset } from 'tsparticles-preset-triangles'
import { SocialButtons, PageWrapper } from '../../components'
import './style.scss'

function HomePage() {
  const { t } = useTranslation()
  const customInit = (engine) => loadTrianglesPreset(engine)
  const options = {
    preset: 'triangles',
    background: {
      color: {
        value: 'transparent',
      },
    },
    particles: {
      number: { value: 20 },
      move: {
        speed: 1.5,
      },
    },
  }

  return (
    <PageWrapper className="home-page">
      <Particles options={options} init={customInit} />
      <h1 className="name">
        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
        {t('name')} <span className="family">{t('family')}</span>
      </h1>
      <p className="description">{t('home-description')}</p>
      <SocialButtons />
    </PageWrapper>
  )
}

export default HomePage
