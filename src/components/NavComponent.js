import mainHomeLogo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'

export function NavComponent () {
  return (
    <header>
      <div className='logoContainer'>
        <img src={mainHomeLogo} />
      </div>
      <a className='toggle-btn' href='#'><img src={iconMenu} /></a>
      <nav>
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
      </nav>

    </header>
  )
}
