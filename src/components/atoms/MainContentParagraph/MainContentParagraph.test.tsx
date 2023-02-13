import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MainContentParagraph from "./index";

describe("MainContentParagraph", () => {
	it("MainContentParagraph with only text prop", () => {
		const { container } = render(<MainContentParagraph text={"Hello World"} />);
		expect(screen.getByText("Hello World")).toBeTruthy();
		expect(
			container.getElementsByClassName("mb-4 text-md text-gray-900")
		).toBeTruthy();
		expect(container).toMatchSnapshot();
	});

	it("MainContentParagraph with props", () => {
		const { container } = render(
			<MainContentParagraph
				text="Hello World"
				color={"blue"}
				size={"lg"}
				className={"mb-8"}
			/>
		);
		expect(
			container.getElementsByClassName("mb-8 text-lg text-blue-700")
		).toBeTruthy();
		expect(screen.getByText("Hello World")).toBeTruthy();
		expect(container).toMatchSnapshot();
	});
});
