import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ErrorPage from "./index";

describe("ErrorPage", () => {
	it("renders ErrorPage correctly with MainHeading, MainContentParagraph and HeadingButton", () => {
		const { container } = render(<ErrorPage />);
		expect(
			container.getElementsByClassName(
				"flex min-h-screen items-center bg-gray-900"
			)
		).toBeTruthy();
		expect(screen.getByTestId("heading-main")).toBeTruthy();
		expect(screen.getAllByTestId("main-content-paragraph")).toHaveLength(2);
		expect(screen.getByTestId("heading-button")).toBeTruthy();
	});
});
