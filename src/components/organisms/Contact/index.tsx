import ContactHeading from "../../molecules/ContactHeading";
import ContactForm from "../../molecules/ContactForm";

export default function Contact() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<ContactHeading />
				<ContactForm />
			</div>
		</section>
	);
}