import Heading from "../Heading";
import MainContent from "../MainContent";
import ProcessSection from "../ProcessSection";

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
