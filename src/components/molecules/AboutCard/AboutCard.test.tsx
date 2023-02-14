import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import AboutCard from "./index";

it("AboutCard with props", () => {
	const { container } = render(
		<AboutCard
			name={"John Doe"}
			role={"Frontend Developer"}
			description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
			fbName={"johndoe"}
			twName={"johndoe"}
			ghName={"johndoe"}
			imgSrc={"https://avatars.githubusercontent.com/u/46004116?v=4"}
		/>
	);
	expect(
		container.getElementsByClassName(
			"items-center rounded-lg bg-gray-50 shadow dark:border-gray-700 dark:bg-gray-800 sm:flex"
		)
	).toBeTruthy();
	expect(screen.getByRole("img")).toHaveProperty(
		"src",
		"https://avatars.githubusercontent.com/u/46004116?v=4"
	);
	expect(screen.getAllByRole("link")).toHaveLength(3);
	expect(screen.getByText("John Doe")).toBeTruthy();
	expect(screen.getByText("Frontend Developer")).toBeTruthy();
	expect(
		screen.getByText("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")
	).toBeTruthy();
	expect(container).toMatchSnapshot();
});
