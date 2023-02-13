import { it, expect } from "vitest";
import { render, renderHook, screen } from "@testing-library/react";
import Input from "./index";
import { FormProvider, useForm } from "react-hook-form";


it("Input with props", () => {
	const { result } = renderHook(() => useForm());
	render(
		<FormProvider {...result.current}>
			<Input type="text" id="name" name="name" placeholder="Name" required />
		</FormProvider>,
	);
	expect(result).toBeTruthy();
	expect(screen.findByPlaceholderText("Name")).toBeTruthy();
	expect(result).toMatchSnapshot();
});