import { Outlet } from "react-router-dom";
import Footer from "../../organisms/Footer";
import Navbar from "../../organisms/Navbar";

export default function Layout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className={"flex-grow bg-gray-900"}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
