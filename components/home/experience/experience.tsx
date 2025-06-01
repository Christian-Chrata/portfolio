"use client";

import Link from "next/link";
import { RxExternalLink } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import EXPERIENCES from "@/constants/experiences";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import Subtitle from "../../subtitle";
import ExperienceElement from "./experienceelement";

const Experience = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="experience"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.experience.title} />
			<div className="flex flex-col gap-8 w-full max-w-[1080px]">
				<h2 className="font-bold text-3xl">
					{TRANSLATION[language].index.experience.header}
				</h2>
				<div className="flex w-full flex-col gap-8">
					{EXPERIENCES.map((experience, i) => (
						<div key={i}>
							<ExperienceElement
								experience={experience}
								initialExpand={i === 0 || i === 1}
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex gap-8 w-full flex-col items-center justify-center pt-8">
				<p className="text-foreground/75 font-light">
					<em>{TRANSLATION[language].index.experience.visitLinkedIn}</em>
				</p>
				<Link href="https://www.linkedin.com/in/christian-christian-9666a6361/" target="_blank">
					<Button
						variant="outline"
						className="items-center gap-2 w-fit text-xl p-6 font-bold"
					>
						<p>{TRANSLATION[language].index.experience.linkedInBtn}</p>
						<RxExternalLink className="w-5 h-5" />
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Experience;
