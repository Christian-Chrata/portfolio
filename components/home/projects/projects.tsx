"use client";

import Link from "next/link";

import ProjectPanel from "@/components/project/projectpanel/projectpanel";
import Subtitle from "@/components/subtitle";
import { Button } from "@/components/ui/button";
import PROJECTS from "@/constants/projects/projects";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

const Projects = () => {
	const { language } = useTranslationStore();

	const firstFour = PROJECTS.slice(0, 4);

	return (
		<div
			id="projects"
			className="items-center justify-center w-full flex flex-col gap-12"
		>
			<Subtitle text={TRANSLATION[language].index.projects.title} />
			<div className="flex flex-col gap-12 w-full items-center justify-center">
				<h2 className="font-bold text-3xl">
					{TRANSLATION[language].index.projects.header}
				</h2>
				<div className="gap-8 grid w-full grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
					{firstFour.map((project, i) => (
						<ProjectPanel key={i} project={project} />
					))}
				</div>
				<Link href="/projects">
					<Button
						variant="ghost"
						className="gradient-text w-fit text-transparent animate-gradient text-2xl"
					>
						{TRANSLATION[language].index.projects.moreBtn.btnText}
					</Button>
				</Link>
			</div>
		</div>
	);
};

export default Projects;
