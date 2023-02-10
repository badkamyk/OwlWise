import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout() {
	return (
		<div className="flex min-h-screen flex-col">
			<Navbar />
			<div className={"flex-grow bg-gray-900"}>
				{/* <Outlet /> */}
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
