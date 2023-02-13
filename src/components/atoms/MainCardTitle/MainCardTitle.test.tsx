import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import MainCardTitle from "./index";

it("MainCardTitle with props", () => {
	const { container } = render(<MainCardTitle text="Hello World" />);
	expect(screen.getByText("Hello World")).toBeTruthy();
	expect(
		container.getElementsByClassName("text-lg font-semibold text-slate-800")
	).toBeTruthy();
	expect(container).toMatchSnapshot();
});
