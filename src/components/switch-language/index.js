import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { useTranslation } from 'react-i18next'
import i18n from '../../utils/i18n'
import './style.scss'

function SwitchLanguage({ className }) {
  const { t } = useTranslation()
  return (
    <div className={className ?? 'switch-language'}>
      <span className="language">
        {t('language')}
        :
      </span>
      <FormControl variant="standard">
        <Select
          value={i18n.language}
          IconComponent={false}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="select"
        >
          <MenuItem value="en">en</MenuItem>
          <MenuItem value="fa">fa</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SwitchLanguage
