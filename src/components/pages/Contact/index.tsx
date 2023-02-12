import ContactForm from "../../molecules/ContactForm";
import ContactHeading from "../../molecules/ContactHeading";

export default function Contact() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<div className="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
				<ContactHeading />
				<ContactForm />
			</div>
		</section>
	);
}
