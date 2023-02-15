import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { expect, it } from "vitest";
import MainCardContent from "./index";

it("renders MainCardContent correctly", () => {
	const { container } = render(
		<MainCardContent
			title={"title"}
			description={"description"}
			src={"https://via.placeholder.com/150"}
		/>
	);
	expect(
		container.getElementsByClassName("relative rounded-[15px] bg-white p-6")
	).toBeTruthy();
	expect(screen.getByText("title")).toBeTruthy();
	expect(screen.getByText("description")).toBeTruthy();
	expect(screen.getByRole("img")).toBeTruthy();
	expect(screen.getByRole("img")).toHaveProperty(
		"src",
		"https://via.placeholder.com/150"
	);
	expect(container).toMatchSnapshot();
});
