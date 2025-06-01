"use client";

import Link from "next/link";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import SkillList from "./skilllist";

const Skills = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="skills"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.skills.title} />
			<div className="flex flex-col gap-12">
				<h2 className="font-bold text-3xl">
					{TRANSLATION[language].index.skills.headers.skills}
				</h2>
				<SkillList />
			</div>
			<Link
				href="https://shields.io/"
				target="_blank"
				className="font-light text-sm w-fit hover:underline text-muted-foreground"
			>
				<em>{TRANSLATION[language].index.skills.imgCredits}</em>
			</Link>
		</div>
	);
};

export default Skills;
