import { fireEvent, waitFor } from "@testing-library/dom";
import { act, render, renderHook, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "./index";

describe("ContactForm", () => {
	const onSubmit = vi.fn();
	it("renders ContactForm correctly", () => {
		const { result } = renderHook(() => useForm());
		const { container } = render(
			<FormProvider {...result.current}>
				<ContactForm onSubmit={onSubmit} />
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

	it("Calls onSubmit after submitting the form", async () => {
		const { result } = renderHook(() => useForm());
		render(
			<FormProvider {...result.current}>
				<ContactForm onSubmit={onSubmit} />
			</FormProvider>
		);
		fireEvent.input(screen.getByPlaceholderText("youremail@example.com"), {
			target: {
				value: "email@example.com",
			},
		});
		fireEvent.input(screen.getByPlaceholderText("Your subject"), {
			target: {
				value: "subject",
			},
		});
		fireEvent.input(screen.getByPlaceholderText("Your message..."), {
			target: {
				value: "this is a test message from user",
			},
		});
		await act(() => {
			fireEvent.submit(screen.getByTestId("contact-form"));
		});

		await waitFor(() => expect(onSubmit).toHaveBeenCalled());
	});
});
