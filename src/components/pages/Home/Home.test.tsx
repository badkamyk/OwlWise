import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { expect, it } from "vitest";
import Home from "./index";

it("renders Home correctly with Heading and MainContent", () => {
	render(<Home />);
	expect(screen.getByTestId("heading")).toBeTruthy();
	expect(screen.getByTestId("process-section")).toBeTruthy();
	expect(screen.getByTestId("main-content")).toBeTruthy();
});
