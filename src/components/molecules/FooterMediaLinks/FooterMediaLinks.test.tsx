import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import FooterMediaLinks, { FooterMediaData } from "./index";

it("FooterMediaLinks", () => {
	const { container } = render(<FooterMediaLinks />);
	const linkElement = screen.getAllByRole("link");
	expect(
		container.getElementsByClassName("flex flex-row justify-center")
	).toBeTruthy();
	expect(linkElement).toHaveLength(FooterMediaData.length);
	linkElement.forEach(link => {
		expect(link).toHaveProperty("href");
		expect(link).toHaveProperty("target", "_blank");
		expect(link).toHaveProperty(
			"className",
			"text-gray-200 hover:text-gray-500"
		);
	});

	expect(container).toMatchSnapshot();
});
