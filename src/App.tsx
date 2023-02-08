import Footer from "./components/organisms/Footer";
import Heading from "./components/organisms/Heading";
import MainContent from "./components/organisms/MainContent";
import Navbar from "./components/organisms/Navbar";
import ProcessSection from "./components/organisms/ProcessSection";

function App() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Heading />
			<ProcessSection />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
