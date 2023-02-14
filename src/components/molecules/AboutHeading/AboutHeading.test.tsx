import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import AboutHeading from "./index";

it("AboutHeading", () => {
	const { container } = render(<AboutHeading />);
	expect(screen.getByText("About")).toBeTruthy();
	expect(screen.getByText("us")).toBeTruthy();
	expect(
		screen.getByText(
			"We are a team of software engineers who are passionate about building scalable solutions for businesses."
		)
	).toBeTruthy();
	expect(container).toMatchSnapshot();
});
