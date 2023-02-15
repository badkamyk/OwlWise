import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import PricingHeader from "./index";

it("renders PricingHeader correctly", () => {
	const { container } = render(<PricingHeader />);
	expect(
		container.getElementsByClassName(
			"mx-auto mb-8 max-w-screen-md text-center lg:mb-12"
		)
	).toBeTruthy();
	expect(container.getElementsByClassName("text-4xl text-white")).toBeTruthy();
	expect(
		screen.getByText("Designed for business teams like yours")
	).toBeTruthy();
	expect(container.getElementsByClassName("text-lg text-white")).toBeTruthy();
	expect(
		screen.getByText(
			"Here at OwlWise we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth"
		)
	).toBeTruthy();
	expect(container).toMatchSnapshot();
});
