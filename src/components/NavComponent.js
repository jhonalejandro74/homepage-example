import { useEffect, useState } from 'react'
import mainHomeLogo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconMenuClose from '../assets/images/icon-menu-close.svg'

export function NavComponent (props) {
  const { onMobile } = props
  const displayMobile = onMobile ? 'Mobile-' : ''
  const [iconState, setIconState] = useState({ icon: iconMenu, showRightBar: false })

  useEffect(() => {
    if (onMobile === false) { setIconState({ icon: iconMenu, showRightBar: false }) }
  }, [onMobile])

  const handleIconClick = () => {
    iconState.showRightBar
      ? setIconState({ icon: iconMenu, showRightBar: false })
      : setIconState({ icon: iconMenuClose, showRightBar: true })
  }
  const activeMenu = iconState.showRightBar ? 'activeMenu' : 'menu'
  console.log('on navComponent: ', iconState.showRightBar)

  return (
    <header>
      <nav>
        <div className='div-logo'>
          <img src={mainHomeLogo} />
        </div>

        <div className={activeMenu}>
          <label className={displayMobile + 'toggle-btn'} onClick={handleIconClick}><img src={iconState.icon} /></label>
          <ul className={displayMobile + 'nav-links'}>
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

        </div>

      </nav>

    </header>
  )
}
