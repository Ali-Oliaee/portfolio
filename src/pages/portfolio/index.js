/* eslint-disable import/no-unresolved */
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SmoothList from 'react-smooth-list'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper'
import { ProjectCard, PageWrapper } from '../../components'
import useProjects from '../../hooks/use-projects'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './style.scss'

function PortfolioPage() {
  const { t } = useTranslation()
  const { projects } = useProjects()

  return (
    <PageWrapper className="portfolio-page">
      <SmoothList>
        <h1>{t('portfolio')}</h1>
        <div className="container">
          <Swiper
            effect="coverflow"
            grabCursor
            centeredSlides
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
            }}
            pagination
            modules={[Autoplay, EffectCoverflow, Pagination]}
          >
            {projects.map(({ title, description, demo, code, src }) => (
              <SwiperSlide key={title} className="swiper-slide">
                <ProjectCard
                  title={title}
                  src={src}
                  description={description}
                  demo={demo}
                  code={code}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
