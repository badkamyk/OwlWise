import Heading from './components/organisms/Heading'
import Navbar from './components/organisms/Navbar'
import ProcessSection from './components/organisms/ProcessSection'
import MainContent from "./components/organisms/MainContent";

function App() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <Heading/>
            <ProcessSection/>
            <MainContent/>
        </div>
    )
}

export default App
