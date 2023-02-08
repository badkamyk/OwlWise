import FooterLink from "../../atoms/FooterLink";
import MainContentParagraph from "../../atoms/MainContentParagraph";
import FooterMediaLinks from "../../molecules/FooterMediaLinks";

export default function Footer() {
    return (
        <section className="bg-gray-900">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <footer className="flex flex-wrap gap-3 justify-center -mx-5 -my-2">
                    <FooterLink href={"Home"}/>
                    <FooterLink href={"About"}/>
                    <FooterLink href={"Services"}/>
                    <FooterLink href={"Contact"}/>
                </footer>
                <FooterMediaLinks/>
                <MainContentParagraph text={"© 2023 OwlWise, Inc. All rights reserved."}
                                      className={"mt-8 text-base leading-6 text-center text-gray-400"}/>
            </div>
        </section>
    );
}