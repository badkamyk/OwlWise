import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import SocialMediaLink from "./index";

it("SocialMediaLink with props", () => {
	const { container } = render(
		<SocialMediaLink
			href="facebook.com"
			srText={"Facebook link"}
			path={<path d="M0 0h24v24H0z" fill="none" />}
		/>
	);
	expect(
		container.getElementsByClassName("text-gray-200 hover:text-gray-500")
	).toBeTruthy();
	expect(container.getElementsByClassName("sr-only")).toBeTruthy();
	expect(screen.getByText("Facebook link")).toBeTruthy();
	expect(screen.getByRole("link")).toHaveProperty("href", "facebook.com");
	expect(container).toMatchSnapshot();
});
