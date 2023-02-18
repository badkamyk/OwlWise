import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Contact from "./index";

it("renders Contact correctly with ContactHeading and ContactForm", () => {
	render(<Contact />);
	expect(screen.getByTestId("heading-main")).toBeTruthy();
	expect(screen.getByTestId("main-content-paragraph")).toBeTruthy();
	expect(screen.getByTestId("contact-form")).toBeTruthy();
});
