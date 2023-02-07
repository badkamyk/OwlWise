import Heading from './components/organisms/Heading'
import MainCard from './components/organisms/MainCard'
import { mainCardInfo } from './components/organisms/MainCard/mainCardInfo'
import Navbar from './components/organisms/Navbar'

function App() {
  const mainCardElement = mainCardInfo.map((item) => {
    return <MainCard title={item.title} description={item.description} src={item.src} key={item.title + item.description} />
  })

  return (
    <div className="min-h-screen">
      <Navbar />
      <Heading />
      <div className='bg-gradient-to-b from-gray-600 via-rose-100 to-teal-100 h-fit flex flex-col md:flex-row gap-8 px-3 md:px-0 py-9 justify-center'>
        {mainCardElement}
      </div>
    </div>
  )
}

export default App
