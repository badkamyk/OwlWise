import Heading from './components/organisms/Heading'
import MainCard from './components/organisms/MainCard'
import Navbar from './components/organisms/Navbar'

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <Heading />
      <div className='bg-gradient-to-t from-rose-100 to-teal-100 h-[500px] flex gap-8 px-6'>
        {/* <div className="flex items-center">
          <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-white p-6">
              <div className="space-y-4">
                <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
                <p className="text-lg font-semibold text-slate-800">Hover me!</p>
                <p className="font-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus temporibus est ut nisi nam at adipisci sunt dolore quibusdam.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500">
            <div className="group-hover:animate-spin-slow invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible"></div>
            <div className="relative rounded-[15px] bg-white p-6">
              <div className="space-y-4">
                <img src="https://nuxt.com/assets/home/ux-fast-light.svg" alt="" />
                <p className="text-lg font-semibold text-slate-800">Hover me!</p>
                <p className="font-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus temporibus est ut nisi nam at adipisci sunt dolore quibusdam.</p>
              </div>
            </div>
          </div>
        </div> */}
        <MainCard title="Hover me!" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam delectus temporibus est ut nisi nam at adipisci sunt dolore quibusdam." />
      </div>
    </div>
  )
}

export default App
