"use client";

import Link from "next/link";
import { useState } from "react";
import { FiLink, FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { SiGooglemaps } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";
import { Experience } from "@/types";

interface ExperienceElementProps {
	experience: Experience;
	initialExpand: boolean;
}

const ExperienceElement = ({
	experience,
	initialExpand,
}: ExperienceElementProps) => {
	const { language } = useTranslationStore();
	const [expand, setExpand] = useState(initialExpand);

	const { title, company, from, to, location, href, description, skills } =
		experience;

	skills.sort((a, b) => {
		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	return (
		<div className="flex w-full flex-col shadow-black/50 shadow-md p-4 gap-4 rounded-xl bg-background border-t-2 border-x">
			<div className="flex flex-row w-full justify-between items-center">
				<div className="flex flex-wrap gap-2 text-left items-center">
					<h1 className="text-lg font-bold">{title[language]}</h1>
					<h2 className="text-lg font-light">@ {company}</h2>
				</div>
				<div className="flex flex-row gap-4 items-center">
					<p className="hidden sm:block">
						{from} - {to ?? TRANSLATION[language].index.experience.present}
					</p>
					{expand ? (
						<Button
							onClick={() => {
								setExpand(false);
							}}
							variant="outline"
						>
							<FiMinusCircle />
						</Button>
					) : (
						<Button
							onClick={() => {
								setExpand(true);
							}}
							variant="outline"
						>
							<FiPlusCircle />
						</Button>
					)}
				</div>
			</div>
			{expand && (
				<div className="border-t flex flex-col justify-start items-start pt-4 gap-4 text-left">
					<div className="block sm:hidden border-b w-full pb-4">
						<p>
							{from} - {to ?? TRANSLATION[language].index.experience.present}
						</p>
					</div>
					<div className="flex items-start justify-start flex-col sm:flex-row gap-2 sm:gap-4">
						<Link
							href={`http://maps.google.com/?q=${location}`}
							target="_blank"
						>
							<Button variant="link" className="gap-2 items-center px-0">
								<SiGooglemaps className="w-5 h-5" />
								<p className="font-light text-neutral">{location}</p>
							</Button>
						</Link>
						{href && (
							<Link href={href} target="_blank">
								<Button variant="link" className="gap-2 items-center px-0">
									<FiLink className="w-4 h-4 " />
									<p className="font-light text-neutral">
										{href.replace("https://", "").replace("www.", "")}
									</p>
								</Button>
							</Link>
						)}
					</div>
					<div>
						<p>{description[language]}</p>
					</div>
					<div className="flex flex-wrap gap-3 text-muted-foreground text-xs font-light">
						{skills.map((skill, i) => (
							<div key={i}>{skill}</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default ExperienceElement;
