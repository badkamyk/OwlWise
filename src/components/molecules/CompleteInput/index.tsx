import InputLabel from "../../atoms/InputLabel";
import Input from "../../atoms/Input";
import { CompleteInputType } from "./CompleteInputType";

export default function CompleteInput({ text, type, id, placeholder, required }: CompleteInputType) {
	return (
		<div>
			<InputLabel text={text} htmlFor={id} />
			<Input {...{ type, id, placeholder, required }} />
		</div>

	);
}