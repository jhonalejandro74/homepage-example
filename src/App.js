import './App.css'
import { NavComponent } from './components/NavComponent'
import { FeatureComponent } from './components/FeatureComponent'
import { ArtBoxes } from './components/ArtBoxes'
import { useEffect, useState } from 'react'

function App () {
  const [onMobile, setOnMobile] = useState(getOnMobileState)

  useEffect(() => {
    function handleWindowResize () {
      setOnMobile(getOnMobileState())
    }
    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  function getOnMobileState () {
    const innerWidth = window.innerWidth
    return (innerWidth < 700)
  }

  console.log('on appjs: ', onMobile)

  return (
    < >
      <NavComponent onMobile={onMobile} />
      <main>
        <FeatureComponent onMobile={onMobile} />
        <ArtBoxes onMobile={onMobile} />
      </main>
    </>
  )
}
export default App
