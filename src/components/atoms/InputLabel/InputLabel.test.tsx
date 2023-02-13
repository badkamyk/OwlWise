import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import InputLabel from "./index";

it("InputLabel with props", () => {
	const { container } = render(<InputLabel text="Name" htmlFor="name" />);
	expect(screen.getByText("Name")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
