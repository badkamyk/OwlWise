import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./index";

describe("Footer", () => {
	it("renders Footer correctly with FooterLink, FooterMediaLinks and MainContentParagraph", () => {
		const { container } = render(<Footer />);
		expect(container.getElementsByClassName("bg-gray-900")).toBeTruthy();
		expect(screen.getByTestId("footer-section")).toBeTruthy();
		expect(screen.getAllByTestId("footer-link")).toHaveLength(4);
		expect(screen.getByTestId("footer-media-links")).toBeTruthy();
		expect(screen.getByTestId("main-content-paragraph")).toBeTruthy();
		expect(container).toMatchSnapshot();
	});
});
