import Heading from "../../organisms/Heading";
import MainContent from "../../organisms/MainContent";
import ProcessSection from "../../organisms/ProcessSection";

function Home() {
	return (
		<div className="min-h-screen">
			<Heading />
			<ProcessSection />
			<MainContent />
		</div>
	);
}

export default Home;
