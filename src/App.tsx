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
      <div className='bg-gradient-to-t from-rose-100 to-teal-100 h-[500px] flex gap-8 px-6'>
        {mainCardElement}
      </div>
    </div>
  )
}

export default App
