import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import FooterLinkContainer from "./index";

it("FooterLinkContainer", () => {
	const { container } = render(<FooterLinkContainer href={"Home"} />);
	expect(container.getElementsByClassName("px-5 py-2")).toBeTruthy();
	expect(screen.getByRole("link")).toBeTruthy();
	expect(screen.getByRole("link")).toHaveProperty("href", "/");
	expect(screen.getByText("Home")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
