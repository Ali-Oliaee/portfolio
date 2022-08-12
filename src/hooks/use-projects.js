import { useTranslation } from 'react-i18next'
import phoneBook from '../assets/images/phone-book.png'
import signupPage from '../assets/images/signup-page.png'
import calculator from '../assets/images/calculator.png'
import instagramUi from '../assets/images/instagram-ui.png'
import portfolio from '../assets/images/portfolio.png'
import loremNews from '../assets/images/news-site.png'
import rareShop from '../assets/images/rare-shop.png'
import adviceGenerator from '../assets/images/advice-generator.png'
import nftCard from '../assets/images/nft-card.png'
import aiPage from '../assets/images/ai-page.png'
import clock from '../assets/images/digital-clock.png'

const useProjects = () => {
  const { t } = useTranslation()

  const mainProjects = [{
    title: t('phone-book'),
    src: phoneBook,
    description: t('phone-book-description'),
    code: 'https://github.com/ali-oliaee/phoneBook/',
  }, {
    title: t('signup-page'),
    src: signupPage,
    description: t('signup-page-description'),
    demo: 'https://ali-oliaee.github.io/signup-page/',
    code: 'https://github.com/ali-oliaee/signup-page/',
  }, {
    title: t('rare-shop'),
    src: rareShop,
    description: t('rare-shop-description'),
    code: 'https://github.com/ali-oliaee/rare-shop/',
  }, {
    title: t('portfolio'),
    src: portfolio,
    description: t('portfolio-description'),
    demo: 'https://ali-oliaee.github.io/Ali-Oliaee/',
    code: 'https://github.com/ali-oliaee/Ali-Oliaee/',
  }, {
    title: t('calculator'),
    src: calculator,
    description: t('calculator-description'),
    demo: 'https://ali-oliaee.github.io/Calculator/',
    code: 'https://github.com/ali-oliaee/Calculator/',
  }, {
    title: t('news-site'),
    src: loremNews,
    description: t('news-site-description'),
    demo: 'https://ali-oliaee.github.io/lorem-news/',
    code: 'https://github.com/ali-oliaee/lorem-news/',
  }, {
    title: t('instagram-ui'),
    src: instagramUi,
    description: t('instagram-ui-description'),
    code: 'https://github.com/ali-oliaee/Instagram-UI/',
  }]

  const otherProjects = [{
    title: t('advice-generator'),
    src: adviceGenerator,
    description: t('advice-description'),
    demo: 'https://ali-oliaee.github.io/advice-generator-app/',
    code: 'https://github.com/ali-oliaee/advice-generator-app/',
  }, {
    title: t('nft-card'),
    src: nftCard,
    description: t('nft-description'),
    demo: 'https://ali-oliaee.github.io/NFT-card-component/',
    code: 'https://github.com/ali-oliaee/NFT-card-component/',
  }, {
    title: t('digital-clock'),
    src: clock,
    description: t('clock-description'),
    demo: 'https://ali-oliaee.github.io/Digital-clock/',
    code: 'https://github.com/ali-oliaee/Digital-clock/',
  }, {
    title: t('ai-page'),
    src: aiPage,
    description: t('ai-page-description'),
    demo: 'https://ali-oliaee.github.io/Single-webPage/',
    code: 'https://github.com/ali-oliaee/Single-webPage/',
  }]

  return {
    mainProjects,
    otherProjects,
  }
}

export default useProjects
