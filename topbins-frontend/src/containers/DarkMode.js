
import { HiLightBulb, HiOutlineLightBulb } from 'react-icons/hi';
import usePersistedState from '../usePersistedState';
import './DarkMode.css'




const DarkMode = () => {

    const [darkMode, setDarkMode] = usePersistedState('darkMode', false)

    const handleClick = () => {
        setDarkMode(!darkMode);
    }

  return (
    <button className='darkMode'   onClick={handleClick}>{darkMode ? <HiLightBulb/> : <HiOutlineLightBulb/>}</button>
  )
}

export default DarkMode