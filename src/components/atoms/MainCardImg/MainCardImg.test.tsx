import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import MainCardImg from "./index";

it("renders MainCardImg with props correctly", () => {
	const { container } = render(
		<MainCardImg
			src="https://via.placeholder.com/150"
			alt="placeholder"
			className="h-32 w-32"
		/>
	);
	expect(screen.getByAltText("placeholder")).toBeTruthy();
	expect(container.getElementsByClassName("h-32 w-32")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
