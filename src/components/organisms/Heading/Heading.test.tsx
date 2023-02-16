import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Heading from "./index";

describe("Heading", () => {
	it("renders Heading correctly with MainHeading, HeadingParagraph and HeadingButton", () => {
		const { container } = render(<Heading />);
		expect(screen.getByTestId("heading")).toBeTruthy();
		expect(screen.getByTestId("heading-main")).toBeTruthy();
		expect(
			container.getElementsByClassName(
				"mb-3 text-lg font-normal text-gray-500 dark:text-gray-400 lg:text-xl"
			)
		).toBeTruthy();
		expect(screen.getByTestId("heading-button")).toBeTruthy();
		expect(container).toMatchSnapshot();
	});
});
