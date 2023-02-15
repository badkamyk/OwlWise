import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import ContactHeading from "./index";

it("renders ContactHeading correctly", () => {
	const { container } = render(<ContactHeading />);
	expect(screen.getByText("Contact")).toBeTruthy();
	expect(screen.getByText("us")).toBeTruthy();
	expect(
		screen.getByText(
			"Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."
		)
	).toBeTruthy();
	expect(container).toMatchSnapshot();
});
