import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { expect, it } from "vitest";
import MainCard from "./index";

it("renders MainCard with props correctly", () => {
	const { container } = render(
		<MainCard
			title={"title"}
			description={"description"}
			src={"https://via.placeholder.com/150"}
		/>
	);
	expect(container.getElementsByClassName("flex items-center")).toBeTruthy();
	expect(
		container.getElementsByClassName(
			"group relative mx-auto w-96 overflow-hidden rounded-[16px] bg-gray-300 p-[1px] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500"
		)
	).toBeTruthy();
	expect(
		container.getElementsByClassName(
			"invisible absolute -top-40 -bottom-40 left-10 right-10 bg-gradient-to-r from-transparent via-white/90 to-transparent group-hover:visible group-hover:animate-spin-slow"
		)
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
