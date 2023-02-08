import Heading from "./components/organisms/Heading";
import MainContent from "./components/organisms/MainContent";
import ProcessSection from "./components/organisms/ProcessSection";

function App() {
	return (
		<div className="min-h-screen">
			<Heading />
			<ProcessSection />
			<MainContent />
		</div>
	);
}

export default App;
