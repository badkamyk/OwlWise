import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import HeadingMain from "./index";

it("HeadingMain with props", () => {
	const result = render(
		<HeadingMain firstPhrase="Hello" secondPhrase="World" />
	);
	expect(result).toBeTruthy();
	expect(result).toMatchSnapshot();
});
