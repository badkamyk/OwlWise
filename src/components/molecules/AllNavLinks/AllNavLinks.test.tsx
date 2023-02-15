import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import AllNavLinks from "./index";

it("renders AllNavLinks correctly", () => {
	const { container } = render(<AllNavLinks isExpanded={true} />);
	expect(screen.getByText("Home")).toBeTruthy();
	expect(screen.getByText("About")).toBeTruthy();
	expect(screen.getByText("Pricing")).toBeTruthy();
	expect(screen.getByText("Contact")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
