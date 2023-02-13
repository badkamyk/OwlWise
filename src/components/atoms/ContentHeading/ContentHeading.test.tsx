import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ContentHeading from "./index";

describe("ContentHeading", () => {
	it("renders with only text prop", () => {
		const result = render(<ContentHeading text="Hello World" />);
		expect(result).toBeTruthy();
		expect(screen.getByText("Hello World")).toBeTruthy();
		expect(result).toMatchSnapshot();
	});

	it("renders with all props", () => {
		const result = render(
			<ContentHeading
				text="Hello World"
				color="blue"
				size="xl"
				className="mb-4 font-extrabold tracking-tight"
			/>
		);
		expect(result).toBeTruthy();
		expect(result).toMatchSnapshot();
	});
});
