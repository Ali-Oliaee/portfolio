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
import phoneBook from '../../assets/images/phone-book.png'
import adviceGenerator from '../../assets/images/advice-generator.png'
import nftCard from '../../assets/images/nft-card.png'
import aiPage from '../../assets/images/ai-page.png'
import calculator from '../../assets/images/calculator.png'
import instagramUi from '../../assets/images/instagram-ui.png'
import signupPage from '../../assets/images/signup-page.png'
import clock from '../../assets/images/digital-clock.png'
import portfolio from '../../assets/images/portfolio.png'
import loremNews from '../../assets/images/news-site.png'
import rareShop from '../../assets/images/rare-shop.png'
import PageWrapper from '../../components/page-wrapper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'
import './style.scss'

function PortfolioPage() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

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
            <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={phoneBook}
                title={t('phone-book')}
                description={t('phone-book-description')}
                code="https://github.com/ali-oliaee/phoneBook/"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={signupPage}
                title={t('signup-page')}
                description={t('signup-page-description')}
                demo="https://ali-oliaee.github.io/signup-page/"
                code="https://github.com/ali-oliaee/signup-page/"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={rareShop}
                title={t('rare-shop')}
                description={t('rare-shop-description')}
                code="https://github.com/ali-oliaee/rare-shop/"
              />
            </SwiperSlide>
            <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={portfolio}
                title={t('portfolio')}
                description={t('portfolio-description')}
                demo="https://ali-oliaee.github.io/Ali-Oliaee/"
                code="https://github.com/ali-oliaee/Ali-Oliaee/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                src={calculator}
                title={t('calculator')}
                description={t('calculator-description')}
                demo="https://ali-oliaee.github.io/Calculator/"
                code="https://github.com/ali-oliaee/Calculator/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                src={loremNews}
                title={t('news-site')}
                description={t('news-site-description')}
                demo="https://ali-oliaee.github.io/lorem-news/"
                code="https://github.com/ali-oliaee/lorem-news/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                src={instagramUi}
                title={t('instagram-ui')}
                description={t('instagram-ui-description')}
                code="https://github.com/ali-oliaee/Instagram-UI/"
              />
            </SwiperSlide>
          </Swiper>
          <List component="nav" className="more-projects-list">
            <ListItem onClick={() => setOpen(!open)}>
              <Button onClick={() => setOpen(!open)} className="button">
                {open ? t('learn-less') : t('learn-more')}
              </Button>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit className="list-collapse">
              <Grid container spacing={1} justifyContent="center">
                <Grid item>
                  <ProjectCard
                    src={adviceGenerator}
                    title={t('advice-generator')}
                    description={t('advice-description')}
                    demo="https://ali-oliaee.github.io/advice-generator-app/"
                    code="https://github.com/ali-oliaee/advice-generator-app/"
                  />
                </Grid>
                <Grid item>
                  <ProjectCard
                    src={nftCard}
                    title={t('nft-card')}
                    description={t('nft-description')}
                    demo="https://ali-oliaee.github.io/NFT-card-component/"
                    code="https://github.com/ali-oliaee/NFT-card-component/"
                  />
                </Grid>
                <Grid item>
                  <ProjectCard
                    src={clock}
                    title={t('digital-clock')}
                    description={t('clock-description')}
                    demo="https://ali-oliaee.github.io/Digital-clock/"
                    code="https://github.com/ali-oliaee/Digital-clock/"
                  />
                </Grid>
                <Grid item>
                  <ProjectCard
                    src={aiPage}
                    title={t('ai-page')}
                    description={t('ai-page-description')}
                    demo="https://ali-oliaee.github.io/Single-webPage/"
                    code="https://github.com/ali-oliaee/Single-webPage/"
                  />
                </Grid>
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
