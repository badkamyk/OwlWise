import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import PricingCardHeading from "./index";

it("renders PricingCardHeading with props correctly", () => {
	const { container } = render(
		<PricingCardHeading
			heading={"heading"}
			paragraph={"paragraph"}
			price={"333"}
		/>
	);
	expect(screen.getByText("heading")).toBeTruthy();
	expect(screen.getByText("paragraph")).toBeTruthy();
	expect(screen.getByText("333")).toBeTruthy();
	expect(container.getElementsByClassName("text-xl text-white")).toBeTruthy();
	expect(
		container.getElementsByClassName("my-8 flex items-baseline justify-center")
	).toBeTruthy();
	expect(
		container.getElementsByClassName("mr-2 text-5xl font-extrabold text-white")
	).toBeTruthy();
	expect(
		container.getElementsByClassName("text-gray-500 dark:text-white")
	).toBeTruthy();
	expect(container).toMatchSnapshot();
});
