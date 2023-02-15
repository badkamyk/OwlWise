import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import MainContentText from "./index";

it("renders MainContentText with props correctly", () => {
	const { container } = render(
		<MainContentText
			headingText={"headingText"}
			paragraphText={"paragraphText"}
			secondaryText={"secondaryText"}
		/>
	);
	expect(
		container.getElementsByClassName(
			"font-light text-gray-500 dark:text-gray-400 sm:text-lg"
		)
	).toBeTruthy();
	expect(screen.getByText("headingText")).toBeTruthy();
	expect(screen.getByText("paragraphText")).toBeTruthy();
	expect(screen.getByText("secondaryText")).toBeTruthy();
	expect(container.getElementsByClassName("text-xl")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
