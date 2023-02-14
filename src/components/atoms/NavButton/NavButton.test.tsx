import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import NavButton from "./index";

it("NavButton with props", () => {
	const { container } = render(
		<NavButton isExpanded={true} setIsExpanded={() => {}} />
	);
	expect(
		container.getElementsByClassName(
			"ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
		)
	).toBeTruthy();
	expect(container.getElementsByClassName("sr-only")).toBeTruthy();
	expect(screen.getByText("Open main menu")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
