import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import HeadingMain from "./index";

it("renders HeadingMain with props correctly", () => {
	const result = render(
		<HeadingMain firstPhrase="Hello" secondPhrase="World" />
	);
	expect(screen.getByText("Hello")).toBeTruthy();
	expect(screen.getByText("World")).toBeTruthy();
	expect(result).toMatchSnapshot();
});
