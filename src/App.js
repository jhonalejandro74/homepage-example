import './App.css'
import { NavComponent } from './components/NavComponent'
import { FeatureComponent } from './components/FeatureComponent'
import { ArtBoxes } from './components/ArtBoxes'

function App () {
  return (
    < >
      <NavComponent />
      <main>
        <FeatureComponent />
        <ArtBoxes />
      </main>
    </>
  )
}
export default App
