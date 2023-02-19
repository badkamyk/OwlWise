import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { pricingData } from "../../../utils/pricingData";
import Pricing from "./index";

it("renders Pricing with 3 PricingCards and heading", () => {
	render(<Pricing />);
	expect(screen.getByTestId("pricing-header")).toBeTruthy();
	expect(screen.getAllByTestId("pricing-card-heading")).toHaveLength(
		pricingData.length
	);
	expect(screen.getAllByRole("list")).toHaveLength(pricingData.length);
});
