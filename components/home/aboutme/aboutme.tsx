"use client";

import { AboutMeBodyEn, AboutMeBodyFi } from "@/constants/aboutme";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import ProfPic from "./profpic";

const AboutMe = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="aboutMe"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.aboutme.title} />
			<div className="flex flex-row gap-12 justify-between w-full items-center">
				<div className="hidden lg:flex min-w-[256px] max-w-[256px] min-h-[256px] max-h-[256px]">
					<ProfPic />
				</div>
				<div className="text-left flex flex-col gap-3">
					<h2 className="font-bold text-3xl">
						{TRANSLATION[language].index.aboutme.subtitle}
					</h2>
					{language === "id" ? <AboutMeBodyFi /> : <AboutMeBodyEn />}
				</div>
			</div>
		</div>
	);
};

export default AboutMe;
