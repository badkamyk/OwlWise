import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import NavLogo from "./index";

it("renders rNavLogo with props correctly", () => {
	const { container } = render(
		<NavLogo href="/" src="/favicon.ico" alt="Logo" text="Logo" />
	);
	expect(container.getElementsByClassName("flex items-center")).toBeTruthy();
	expect(container.getElementsByClassName("mr-3 h-6 sm:h-9")).toBeTruthy();
	expect(screen.getByRole("link")).toHaveProperty("href", "/");
	expect(
		container.getElementsByClassName(
			"self-center whitespace-nowrap text-xl font-semibold dark:text-white"
		)
	).toBeTruthy();
	expect(screen.getByText("Logo")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
