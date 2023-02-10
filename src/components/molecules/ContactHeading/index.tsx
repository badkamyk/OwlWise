import HeadingMain from "../../atoms/HeadingMain";
import MainContentParagraph from "../../atoms/MainContentParagraph";

export default function ContactHeading() {
	return (
		<>
			<HeadingMain firstPhrase={"Contact"} secondPhrase={"us"} />
			<MainContentParagraph
				text={"Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know."} />
		</>
	);
}