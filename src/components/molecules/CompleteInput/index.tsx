import { useFormContext } from "react-hook-form";
import Input from "../../atoms/Input";
import InputLabel from "../../atoms/InputLabel";
import { CompleteInputType } from "./CompleteInputType";

const CompleteInput = ({
	text,
	type,
	id,
	placeholder,
	required,
}: CompleteInputType) => {
	const { register } = useFormContext();
	return (
		<div>
			<InputLabel text={text} htmlFor={id} />
			<Input {...{ type, id, placeholder, required }} {...register(id)} />
		</div>
	);
};

export default CompleteInput;
