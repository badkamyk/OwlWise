import { InputProps } from "../Input/InputType";

export type TextAreaType = Omit<InputProps, "type"> & {
	rows?: number;
}