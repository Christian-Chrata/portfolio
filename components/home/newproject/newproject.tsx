"use client";

import ContactButton from "@/components/navbar/contact";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import Backdrop from "./backdrop";

const NewProject = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="newProject"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.newproject.title} />
			<Backdrop>
				<div className="w-full flex flex-col gap-4 sm:flex-row items-center justify-between p-12">
					<h2 className="text-3xl font-bold text-white">
						{TRANSLATION[language].index.newproject.hero.title}
					</h2>
					<p className="text-white hidden lg:flex">
						{TRANSLATION[language].index.newproject.hero.subtitle}
					</p>
					<ContactButton />
				</div>
			</Backdrop>
		</div>
	);
};

export default NewProject;
