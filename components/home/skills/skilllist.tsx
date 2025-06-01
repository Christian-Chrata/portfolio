"use client";

import SKILLS from "@/constants/skills";
import { Skill } from "@/types";

import SkillElement from "./skillelement";

interface SkillListProps {
	skills?: Skill[];
}

const SkillList = ({ skills }: SkillListProps) => {
	const toDisplay = skills || SKILLS;

	toDisplay.sort((a, b) => {
		if (a.name < b.name) return -1;
		if (a.name > b.name) return 1;
		return 0;
	});

	const reverse = [...toDisplay];
	reverse.sort((a, b) => {
		if (a.name < b.name) return 1;
		if (a.name > b.name) return -1;
		return 0;
	});

	/**
	CREDITS:
	https://ibelick.com/blog/create-infinite-slider-with-tailwind-css	
	*/

	return (
		<div className="relative m-auto min-w-[180px] w-[90vw] xl:w-[80vw] max-w-[1320px] overflow-hidden bg-background group cursor-crosshair">
			<div className="absolute top-0 left-0 h-full w-16 sm:w-32 z-10 bg-linear-to-r from-background via-background to-transparent"></div>
			<div className="absolute top-0 right-0 h-full w-16 sm:w-32 z-10 bg-linear-to-l from-background via-background to-transparent"></div>
			<div
				className="animate-infinite-slider flex z-0 [animation-play-state:running] group-hover:[animation-play-state:paused]"
				style={{
					width: `${toDisplay.length * 200}px`,
				}}
			>
				{toDisplay.map((logo, index) => (
					<div
						className="slide flex w-48 items-center justify-center"
						key={index}
					>
						<SkillElement skill={logo} />
					</div>
				))}
				{toDisplay.map((logo, index) => (
					<div
						className="slide flex w-48 items-center justify-center"
						key={index}
					>
						<SkillElement skill={logo} />
					</div>
				))}
			</div>
			<div
				className="animate-infinite-slider flex z-0 [animation-play-state:running] group-hover:[animation-play-state:paused]"
				style={{
					width: `${toDisplay.length * 200}px`,
				}}
			>
				{reverse.map((logo, index) => (
					<div
						className="slide flex w-48 items-center justify-center"
						key={index}
					>
						<SkillElement skill={logo} />
					</div>
				))}
				{reverse.map((logo, index) => (
					<div
						className="slide flex w-48 items-center justify-center"
						key={index}
					>
						<SkillElement skill={logo} />
					</div>
				))}
			</div>
		</div>
	);
};

export default SkillList;
