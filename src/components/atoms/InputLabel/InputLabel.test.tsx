import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import InputLabel from "./index";

it("renders InputLabel with props correctly", () => {
	const { container } = render(<InputLabel text="Name" htmlFor="name" />);
	expect(screen.getByText("Name")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
