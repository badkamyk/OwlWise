import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import NavLink from "./index";

it("renders NavLink with props correctly", () => {
	const { container } = render(<NavLink href="Home" />);
	expect(
		container.getElementsByClassName(
			"block rounded bg-blue-700 py-2 pl-3 pr-4 text-white dark:text-white md:bg-transparent md:p-0 md:text-blue-400"
		)
	).toBeTruthy();
	expect(screen.getByRole("link")).toHaveProperty("href", "/");
	expect(container).toMatchSnapshot();
});
