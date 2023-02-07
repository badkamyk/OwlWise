import Heading from './components/organisms/Heading'
import MainCard from './components/molecules/MainCard'
import { mainCardInfo } from './components/molecules/MainCard/mainCardInfo'
import Navbar from './components/organisms/Navbar'
import ProcessSection from './components/organisms/ProcessSection'

function App() {


  return (
    <div className="min-h-screen">
      <Navbar />
      <Heading />
      <ProcessSection />
    </div>
  )
}

export default App
