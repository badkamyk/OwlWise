import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./index";

const navLinks = ["Home", "About", "Pricing", "Contact"];
describe("Navbar", () => {
	it("renders Navbar correctly with NavLogo, NavButton and AllNavLinks", () => {
		const { container } = render(<Navbar />);
		expect(
			container.getElementsByClassName(
				"border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4"
			)
		).toBeTruthy();
		expect(screen.getByTestId("nav-logo")).toBeTruthy();
		expect(screen.getByTestId("nav-button")).toBeTruthy();
		expect(screen.getByTestId("all-nav-links")).toBeTruthy();
		expect(screen.getAllByTestId("nav-link")).toHaveLength(navLinks.length);
	});
});
