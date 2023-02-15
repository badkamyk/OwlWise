import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import PricingPoint from "./index";

it("renders PricingPoint with props correctly", () => {
	const { container } = render(<PricingPoint text="PricingPoint" />);
	expect(
		container.getElementsByClassName("flex items-center space-x-3")
	).toBeTruthy();

	expect(
		container.getElementsByClassName(
			"h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
		)
	).toBeTruthy();

	expect(screen.getByText("PricingPoint")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
