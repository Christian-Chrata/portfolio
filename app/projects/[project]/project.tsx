/* eslint-disable @next/next/no-img-element */
"use client";

import Container from "@/components/container";
import DemoLink from "@/components/project/demolink";
import ProjectHeader from "@/components/project/header";
import ProjectLearnMore from "@/components/project/learnmore";
import ProjectNavbar from "@/components/project/projectnavbar";
import ProjectVideo from "@/components/project/video";
import VideoNotWorking from "@/components/project/videonotworking";
import PROJECTS from "@/constants/projects/projects";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

interface ProjectProps {
	id: string;
}

const ProjectClient = ({ id }: ProjectProps) => {
	const { language } = useTranslationStore();

	const project = PROJECTS.filter((project) => project.id === id)[0];

	document.title = `${project.title} | Joona Kettunen`;

	const sortedSkills = project.skills;

	sortedSkills.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	return (
		<Container>
			<div className="flex flex-col gap-20 items-center w-full">
				<ProjectHeader project={project} sortedSkills={sortedSkills} />
				<div className="flex w-full flex-col xl:flex-row gap-8">
					<ProjectVideo project={project} />
					<div className="flex flex-col w-full xl:w-fit md:flex-row xl:flex-col gap-4">
						{project?.href && <DemoLink project={project} />}
						<VideoNotWorking project={project} />
					</div>
				</div>
				<div className="flex flex-col text-left w-full gap-4">
					<h2 className="font-bold text-2xl">
						{TRANSLATION[language].project.description.title}
					</h2>
					<span>{project.description[language]}</span>
				</div>
				<ProjectLearnMore project={project} />
				<ProjectNavbar currentProject={project.id} />
			</div>
		</Container>
	);
};

export default ProjectClient;
