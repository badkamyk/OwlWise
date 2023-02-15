import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import HeadingText from "./index";

it("renders HeadingText correctly", () => {
	const { container } = render(<HeadingText />);
	expect(container.getElementsByClassName("p-3 text-center")).toBeTruthy();
	expect(screen.getByText("Better Data")).toBeTruthy();
	expect(screen.getByText("Scalable AI.")).toBeTruthy();
	expect(screen.getByText("Check pricing")).toBeTruthy();
	expect(
		screen.getByText(
			"Here at OwlWise we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth."
		)
	).toBeTruthy();
	expect(screen.getByRole("link")).toBeTruthy();
	expect(screen.getByRole("link")).toHaveProperty("href", "/pricing");
	expect(container).toMatchSnapshot();
});
