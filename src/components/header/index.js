import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CallIcon from '@mui/icons-material/Call'
import HomeIcon from '@mui/icons-material/Home'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import Drawer from '@mui/material/Drawer'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTranslation } from 'react-i18next'
import SwitchLanguage from '../switch-language'
import i18n from '../../utils/i18n'
import './style.scss'

function DesktopHeader() {
  const { t } = useTranslation()
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => setValue(newValue)

  return (
    <div className="desktop-header">
      <Tabs
        value={value}
        onChange={handleChange}
        className="tabs"
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label={t('home')} LinkComponent={Link} to="/" value={0} />
        <Tab label={t('about')} LinkComponent={Link} to="/about" value={1} />
        <Tab label={t('resume')} LinkComponent={Link} to="/resume" value={2} />
        <Tab label={t('portfolio')} LinkComponent={Link} to="/projects" value={3} />
        <Tab label={t('contact')} LinkComponent={Link} to="/contact" value={4} />
      </Tabs>
      <SwitchLanguage />
    </div>
  )
}

function MobileHeader() {
  const { t } = useTranslation()
  const [visible, setVisible] = useState(false)

  return (
    <div className="mobile-header">
      <IconButton onClick={() => setVisible(true)}>
        <MenuIcon className="burger-icon" />
      </IconButton>
      <Drawer
        anchor={i18n.dir() === 'rtl' ? 'right' : 'left'}
        open={visible}
        onClose={() => setVisible(false)}
        className="mobile-header-drawer"
      >
        <List className="list">
          <ListItem
            button
            component={Link}
            to="/"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={t('home')} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/about"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <InfoOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t('about')} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/resume"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <FeedOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary={t('resume')} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/projects"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <ArrowCircleDownIcon />
            </ListItemIcon>
            <ListItemText primary={t('portfolio')} />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            onClick={() => setVisible(false)}
          >
            <ListItemIcon>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary={t('contact')} />
          </ListItem>
        </List>
        <SwitchLanguage className="mobile-header-switch-language" />
      </Drawer>
    </div>
  )
}

function Header() {
  const isMobile = useMediaQuery('(max-width: 680px)')
  return isMobile ? <MobileHeader /> : <DesktopHeader />
}

export default Header
