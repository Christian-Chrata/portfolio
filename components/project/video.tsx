"use client";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";
import { Project } from "@/types";

interface ProjectVideoProps {
	project: Project;
}

const ProjectVideo = ({ project }: ProjectVideoProps) => {
	const { language } = useTranslationStore();

	return (
		<div className="flex flex-col gap-2">
			<div className="relative flex bg-primary text-rose-500 w-full text-center items-center justify-center rounded-xl">
				<div className="absolute z-0">LOADING VIDEO...</div>
				<video
					autoPlay
					loop
					muted
					controls
					playsInline
					className="relative z-30 w-full h-full object-cover rounded-xl"
					src={project.media}
				/>
			</div>
			<p className="hidden sm:block text-foreground/50 font-light text-sm text-left">
				{project.mediaDescription[language]}
			</p>
			<p className="block sm:hidden text-rose-500 font-light text-sm">
				{TRANSLATION[language].project.video.smallScreen.title}
				<br />
				{TRANSLATION[language].project.video.smallScreen.subtitle}
			</p>
		</div>
	);
};

export default ProjectVideo;
