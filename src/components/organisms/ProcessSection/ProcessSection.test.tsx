import { render, screen } from "@testing-library/react";
import "intersection-observer";
import { describe, expect, it } from "vitest";
import { mainCardInfo } from "../../molecules/MainCard/mainCardInfo";
import ProcessSection from "./index";

describe("ProcessSection", () => {
	it("renders ProcessSection correctly with HeadingMain, MainCard", () => {
		const { container } = render(<ProcessSection />);
		expect(screen.getByTestId("process-section")).toBeTruthy();
		expect(screen.getByTestId("heading-main")).toBeTruthy();
		expect(screen.getAllByTestId("main-card")).toHaveLength(
			mainCardInfo.length
		);
		expect(container).toMatchSnapshot();
	});
});
