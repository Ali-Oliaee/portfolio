/* eslint-disable import/no-unresolved */
import { useState } from 'react'
import {
  Button, Collapse, Grid, List, ListItem,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import SmoothList from 'react-smooth-list'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper'
import ProjectCard from '../../components/project-view-card'
import PageWrapper from '../../components/page-wrapper'
import useProjects from '../../hooks/use-projects'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './style.scss'

function PortfolioPage() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { mainProjects, otherProjects } = useProjects()

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
            {mainProjects.map(({
              title, description, demo, code, src,
            }) => (
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
          <List component="nav" className="more-projects-list">
            <ListItem onClick={() => setOpen(!open)}>
              <Button onClick={() => setOpen(!open)} className="button">
                {open ? t('learn-less') : t('learn-more')}
              </Button>
            </ListItem>
            <Collapse in={open} timeout={1500} unmountOnExit className="list-collapse">
              <Grid container spacing={1} justifyContent="center">
                {otherProjects.map(({
                  title, description, demo, code, src,
                }) => (
                  <Grid item key={title}>
                    <ProjectCard
                      title={title}
                      src={src}
                      description={description}
                      demo={demo}
                      code={code}
                    />
                  </Grid>
                ))}
              </Grid>
            </Collapse>
          </List>
        </div>
        <Button href="https://github.com/ali-oliaee?tab=repositories" target="_blank" style={{ textAlign: 'center', display: 'block' }}>
          {t('show-all')}
        </Button>
      </SmoothList>
    </PageWrapper>
  )
}

export default PortfolioPage
