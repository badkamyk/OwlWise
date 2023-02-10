import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/organisms/Home";
import About from "./components/organisms/About";
import ErrorPage from "./components/organisms/ErrorPage";
import Layout from "./components/organisms/Layout";
import Pricing from "./components/organisms/Pricing";
import "./index.css";
import Contact from "./components/organisms/Contact";

const router = createBrowserRouter([
	{
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/pricing",
				element: <Pricing />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
