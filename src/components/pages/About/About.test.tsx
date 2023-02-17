import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import About from "./index";

it("renders About correctly with AboutHeading and AboutCards", () => {
	const { container } = render(<About />);
	expect(screen.getByTestId("about-section")).toBeTruthy();
	expect(screen.getByTestId("about-heading")).toBeTruthy();
	expect(screen.getAllByTestId("about-card")).toHaveLength(4);
	expect(container).toMatchSnapshot();
});
