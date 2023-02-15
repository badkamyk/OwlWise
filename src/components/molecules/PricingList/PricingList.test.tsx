import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import PricingList from "./index";

it("PricingList", () => {
	const { container } = render(
		<PricingList pricingPoints={["point1", "point2"]} />
	);
	expect(
		container.getElementsByClassName("mb-8 space-y-4 text-left")
	).toBeTruthy();
	expect(screen.getAllByRole("listitem")).toHaveLength(2);
	expect(screen.getByText("point1")).toBeTruthy();
	expect(screen.getByText("point2")).toBeTruthy();
	expect(container.getElementsByClassName("pt-6 text-center")).toBeTruthy();
	expect(screen.getByRole("button")).toBeTruthy();
	expect(screen.getByText("Get started")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
