import { expect, it, describe } from "vitest";
import ContentHeading from "./index";
import { render, screen } from "@testing-library/react";

describe("ContentHeading", () => {
	it("renders with only text prop", () => {
		const result = render(<ContentHeading text="Hello World" />);
		expect(result).toBeTruthy();
		expect(screen.getByText("Hello World")).toBeTruthy();
		expect(result).toMatchSnapshot();
	});

	it("renders with all props", () => {
		const result = render(<ContentHeading text="Hello World" color="blue" size="xl"
																					className="mb-4 tracking-tight font-extrabold" />);
		expect(result).toBeTruthy();
		expect(result).toMatchSnapshot();
	});
});


