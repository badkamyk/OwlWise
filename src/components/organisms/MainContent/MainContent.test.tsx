import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { describe, expect, it } from "vitest";
import MainContent from "./index";

describe("MainContent", () => {
	it("renders MainContent correctly with Heading, Features and Footer", () => {
		const { container } = render(<MainContent />);
		expect(screen.getByTestId("main-content")).toBeTruthy();
		expect(screen.getByTestId("main-content-text")).toBeTruthy();
		expect(screen.getByTestId("main-content-images")).toBeTruthy();
		expect(container).toMatchSnapshot();
	});
});
