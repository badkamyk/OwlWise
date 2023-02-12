import AboutCard from "../../molecules/AboutCard";
import AboutHeading from "../../molecules/AboutHeading";

const aboutMembersData = [
	{
		name: "John Doe",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		fbName: "johndoe",
		twName: "johndoe",
		ghName: "johndoe",
		role: "CEO",
		imgSrc:
			"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
	},
	{
		name: "Angela Doe",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		fbName: "angeladoe",
		twName: "angeladoe",
		ghName: "angeladoe",
		role: "CTO",
		imgSrc:
			"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
	},
	{
		name: "Jane Doe",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		fbName: "janedoe",
		twName: "janedoe",
		ghName: "janedoe",
		role: "COO",
		imgSrc:
			"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
	},
	{
		name: "Carl Doe",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		fbName: "carldoe",
		twName: "carldoe",
		ghName: "carldoe",
		role: "CFO",
		imgSrc:
			"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
	},
];
export default function About() {
	return (
		<section className="bg-white dark:bg-gray-900">
			<AboutHeading />
			<div className="mb-6 grid gap-8 px-3 md:grid-cols-2 lg:mb-16">
				{aboutMembersData.map(member => {
					return <AboutCard key={member.name} {...member} />;
				})}
			</div>
		</section>
	);
}
