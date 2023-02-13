import { render, renderHook, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import { expect, it } from "vitest";
import Input from "./index";

it("Input with props", () => {
	const { result } = renderHook(() => useForm());
	render(
		<FormProvider {...result.current}>
			<Input type="text" id="name" name="name" placeholder="Name" required />
		</FormProvider>
	);
	expect(result).toBeTruthy();
	expect(screen.findByPlaceholderText("Name")).toBeTruthy();
	expect(result).toMatchSnapshot();
});
