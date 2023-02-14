import { render, renderHook, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { expect, it } from "vitest";
import CompleteInput from "./index";

it("CompleteInput", () => {
	const { result } = renderHook(() => useForm());
	const { container } = render(
		<FormProvider {...result.current}>
			<CompleteInput
				text="Email"
				type="email"
				id="email"
				placeholder="Your email"
				required
			/>
		</FormProvider>
	);
	expect(screen.getByText("Email")).toBeTruthy();
	expect(screen.getByLabelText("Email")).toBeTruthy();
	expect(screen.getByRole("textbox")).toHaveProperty("id", "email");
	expect(screen.getByRole("textbox")).toHaveProperty(
		"placeholder",
		"Your email"
	);
	expect(screen.getByRole("textbox")).toHaveProperty("required", true);
	expect(container).toMatchSnapshot();
});
