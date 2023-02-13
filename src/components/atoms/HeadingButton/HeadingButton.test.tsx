import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeadingButton from "./index";

describe("HeadingButton", () => {
	const result = render(<HeadingButton href="Home" text={"Home"} />);
	it("renders a link with href and classes", () => {
		expect(result).toBeTruthy();
		expect(screen.getByText("Home")).toBeTruthy();
		expect(result).toMatchSnapshot();
	});
});
