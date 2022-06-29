import { useState } from "react";
import Button from "@mui/material/Button";
import ProjectCard from "../../components/project-view-card";
import phoneBook from "../../assets/images/phone-book.png";
import lovePage from "../../assets/images/love-page.png";
import adviceGenerator from "../../assets/images/advice-generator.png";
import nftCard from "../../assets/images/nft-card.png";
import aiPage from "../../assets/images/ai-page.png";
import calculator from "../../assets/images/calculator.png";
import instagramUi from "../../assets/images/instagram-ui.png";
import qrCard from "../../assets/images/qr-card.png";
import signupPage from "../../assets/images/signup-page.png";
import clock from "../../assets/images/digital-clock.png";
import portfolio from "../../assets/images/portfolio.png";
import newsSite from "../../assets/images/news-site.png";
import { useTranslation } from "react-i18next";
import SmoothList from "react-smooth-list";
import PageWrapper from "../../components/page-wrapper";
import {Swiper,SwiperSlide} from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "./style.scss";

 const PortfolioPage = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false)
  return (
    <PageWrapper className="portfolio-page">
      <SmoothList>
        <h1>{t("portfolio")}</h1>
        <div className="container">
          <Swiper 
           effect={"coverflow"}
           grabCursor={true}
           centeredSlides={true}
           autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
           slidesPerView={"auto"}
           coverflowEffect={{
             rotate: 50,
             stretch: 0,
             depth: 100,
             modifier: 1,
           }}
           pagination={true}
           modules={[Autoplay, EffectCoverflow, Pagination]}
          >
              <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={phoneBook}
                title={t("phone-book")}
                description={t("phone-book-description")}
                code="https://github.com/ali-oliaee/phoneBook/"
                disableDemo
                />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={signupPage}
                title={t("signup-page")}
                description={t("signup-page-description")}
                demo="https://ali-oliaee.github.io/signup-page/"
                code="https://github.com/ali-oliaee/signup-page/"
              />
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
              <ProjectCard
                src={portfolio}
                title={t("portfolio")}
                description={t("portfolio-description")}
                demo="https://ali-oliaee.github.io/Ali-Oliaee/"
                code="https://github.com/ali-oliaee/Ali-Oliaee/"
                />
                </SwiperSlide>
                <SwiperSlide>
             <ProjectCard
              src={calculator}
              title={t("calculator")}
              description={t("calculator-description")}
              demo="https://ali-oliaee.github.io/Calculator/"
              code="https://github.com/ali-oliaee/Calculator/"
              />
              <SwiperSlide>
              </SwiperSlide>
             <ProjectCard
              src={newsSite}
              title={t("news-site")}
              description={t("news-site-description")}
              demo="https://ali-oliaee.github.io/lorem-news/"
              code="https://github.com/ali-oliaee/lorem-news/"
              />
              </SwiperSlide>
           <SwiperSlide>
            <ProjectCard
                src={instagramUi}
                title={t("instagram-ui")}
                description={t("instagram-ui-description")}
                // demo="https://ali-oliaee.github.io/Instagram-UI/"
                code="https://github.com/ali-oliaee/Instagram-UI/"
                disableDemo
              />
            </SwiperSlide>
            </Swiper>
            {showMore &&(
              <div className={`more-projects ${showMore ? 'show' : 'hide'}`}>
            <ProjectCard
              src={adviceGenerator}
              title={t("advice-generator")}
              description={t("advice-description")}
              demo="https://ali-oliaee.github.io/advice-generator-app/"
              code="https://github.com/ali-oliaee/advice-generator-app/"
            />
            <ProjectCard
              src={nftCard}
              title={t("nft-card")}
              description={t("nft-description")}
              demo="https://ali-oliaee.github.io/NFT-card-component/"
              code="https://github.com/ali-oliaee/NFT-card-component/"
            />
            <ProjectCard
              src={clock}
              title={t("digital-clock")}
              description={t("clock-description")}
              demo="https://ali-oliaee.github.io/Digital-clock/"
              code="https://github.com/ali-oliaee/Digital-clock/"
            />
            <ProjectCard
              src={aiPage}
              title={t("ai-page")}
              description={t("ai-page-description")}
              demo="https://ali-oliaee.github.io/Single-webPage/"
              code="https://github.com/ali-oliaee/Single-webPage/"
            />
            </div>
            )}
        </div>
        <div className="button-container">
          <Button onClick={() => setShowMore(!showMore)}>
            {showMore ? t('learn-less') : t("learn-more")}
          </Button>
          <Button
            href="https://github.com/ali-oliaee?tab=repositories"
            target="_blank"

          >
            {t('show-all')}
          </Button>
            </div>
      </SmoothList>
    </PageWrapper>
  );
};

export default PortfolioPage;
