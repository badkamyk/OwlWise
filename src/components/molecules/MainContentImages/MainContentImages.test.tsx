import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import MainContentImages from "./index";

it("renders MainContentImages with props correctly", () => {
	const { container } = render(
		<MainContentImages
			firstSrc={"https://via.placeholder.com/150"}
			firstAlt={"firstAlt"}
			secondSrc={"https://via.placeholder.com/150"}
			secondAlt={"secondAlt"}
			firstClass={"firstClass"}
			secondClass={"secondClass"}
		/>
	);
	const allImages = screen.getAllByRole("img");
	expect(
		container.getElementsByClassName("mt-8 grid grid-cols-2 gap-4")
	).toBeTruthy();
	expect(allImages).toHaveLength(2);
	allImages.forEach((image, i) => {
		expect(image).toHaveProperty("src", "https://via.placeholder.com/150");
		expect(image).toHaveProperty("alt", i === 0 ? "firstAlt" : "secondAlt");
	});
	expect(container).toMatchSnapshot();
});
