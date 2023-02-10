import {InputProps} from "../../atoms/Input/InputType";
import {InputLabelType} from "../../atoms/InputLabel/InputLabelType";

export type CompleteInputType = InputProps & Omit<InputLabelType, "htmlFor">;