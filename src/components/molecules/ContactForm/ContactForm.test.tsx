import { render, renderHook, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { expect, it } from "vitest";
import ContactForm from "./index";

it("renders ContactForm correctly", () => {
	const { result } = renderHook(() => useForm());
	const { container } = render(
		<FormProvider {...result.current}>
			<ContactForm />
		</FormProvider>
	);
	expect(screen.getAllByRole("textbox")).toHaveLength(3);
	expect(screen.getByPlaceholderText("youremail@example.com")).toBeTruthy();
	expect(screen.getByText("Your email")).toBeTruthy();
	expect(screen.getByPlaceholderText("Your subject")).toBeTruthy();
	expect(screen.getByText("Subject")).toBeTruthy();
	expect(screen.getByPlaceholderText("Your message...")).toBeTruthy();
	expect(screen.getByText("Your message")).toBeTruthy();
	expect(screen.getByRole("button")).toHaveProperty("type", "submit");
	expect(container).toMatchSnapshot();
});
