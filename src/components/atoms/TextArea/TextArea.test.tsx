import { render, renderHook, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { expect, it } from "vitest";
import TextArea from "./index";

it("renders TextArea with props correctly", () => {
	const { result } = renderHook(() => useForm());
	const { container } = render(
		<FormProvider {...result.current}>
			<TextArea id="message" rows={4} placeholder="Your message" required />
		</FormProvider>
	);
	expect(screen.getByRole("textbox")).toBeTruthy();
	expect(screen.getByRole("textbox")).toHaveProperty("id", "message");
	expect(screen.getByRole("textbox")).toHaveProperty(
		"placeholder",
		"Your message"
	);
	expect(screen.getByRole("textbox")).toHaveProperty("required", true);
	expect(container.getElementsByClassName("sm:col-span-2")).toBeTruthy();
	expect(container).toMatchSnapshot();
});
