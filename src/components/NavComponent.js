import { useState } from 'react'
import mainHomeLogo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconMenuClose from '../assets/images/icon-menu-close.svg'

export function NavComponent () {
  const [iconState, setIconState] = useState({ icon: iconMenu, showRightBar: false })

  const handleIconClick = () => {
    iconState.showRightBar
      ? setIconState({ icon: iconMenu, showRightBar: false })
      : setIconState({ icon: iconMenuClose, showRightBar: true })
  }

  console.log(iconState.showRightBar)

  return (
    <header>
      <nav>
        <div className='div-logo'>
          <img src={mainHomeLogo} />
        </div>
        <ul className='nav-links'>
          <li>
            <p><a className='NavIndex' href='https://github.com/jdocdev/NavbarsFlexbox/blob/main/opcion2/index.html'>Home</a></p>
          </li>
          <li>
            <p><a className='NavIndex' href='#'>New</a></p>
          </li>
          <li>
            <p><a className='NavIndex' href='#'>Popular</a></p>
          </li>
          <li>
            <p><a className='NavIndex' href='#'>Trending</a></p>
          </li>
          <li>
            <p><a className='NavIndex' href='#'>Categories</a></p>
          </li>
        </ul>
        <label className='toggle-btn' onClick={handleIconClick}><img src={iconState.icon} /></label>

      </nav>

    </header>
  )
}
