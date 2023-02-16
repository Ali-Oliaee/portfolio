import { useTranslation } from 'react-i18next'
import phoneBook from '../assets/images/phone-book.png'
import signupPage from '../assets/images/signup-page.png'
import calculator from '../assets/images/calculator.png'
import instagramUi from '../assets/images/instagram-ui.png'
import portfolio from '../assets/images/portfolio.png'
import loremNews from '../assets/images/news-site.png'
import ds from '../assets/images/data-structures.png'
import rareShop from '../assets/images/rare-shop.png'
import parentsApp from '../assets/images/parents-app.jpg'

const useProjects = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('phone-book'),
      src: phoneBook,
      description: t('phone-book-description'),
      code: 'https://github.com/ali-oliaee/phoneBook/',
    },
    {
      title: t('signup-page'),
      src: signupPage,
      description: t('signup-page-description'),
      demo: 'https://ali-oliaee.github.io/signup-page/',
      code: 'https://github.com/ali-oliaee/signup-page/',
    },
    {
      title: t('rare-shop'),
      src: rareShop,
      description: t('rare-shop-description'),
      code: 'https://github.com/ali-oliaee/rare-shop/',
    },
    {
      title: t('portfolio'),
      src: portfolio,
      description: t('portfolio-description'),
      demo: 'https://ali-oliaee.github.io/Ali-Oliaee/',
      code: 'https://github.com/ali-oliaee/Ali-Oliaee/',
    },
    {
      title: t('calculator'),
      src: calculator,
      description: t('calculator-description'),
      demo: 'https://ali-oliaee.github.io/Calculator/',
      code: 'https://github.com/ali-oliaee/Calculator/',
    },
    {
      title: t('news-site'),
      src: loremNews,
      description: t('news-site-description'),
      demo: 'https://ali-oliaee.github.io/lorem-news/',
      code: 'https://github.com/ali-oliaee/lorem-news/',
    },
    {
      title: t('instagram-ui'),
      src: instagramUi,
      description: t('instagram-ui-description'),
      code: 'https://github.com/ali-oliaee/Instagram-UI/',
    },
    {
      title: t('parents-app'),
      src: parentsApp,
      description: t('parents-app-description'),
    },
    {
      title: t('data-structures'),
      src: ds,
      description: t('data-structures-description'),
      code: 'https://github.com/Ali-Oliaee/data-structures-and-algorithms',
      demo: 'https://ds-qiet.ir',
    },
  ]

  return {
    projects,
  }
}

export default useProjects
