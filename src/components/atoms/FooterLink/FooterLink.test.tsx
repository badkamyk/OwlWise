import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import FooterLink from "./index";

describe("FooterLink", () => {
	const result = render(<FooterLink href="Home" />);
	it("renders a link with href and classes", () => {
		expect(result).toBeTruthy();
		expect(screen.getByText("Home")).toBeTruthy();
		expect(result).toMatchSnapshot();
	});
});
