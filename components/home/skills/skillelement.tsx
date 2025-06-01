"use client";

import { Skill } from "@/types";

interface SkillElementProps {
	skill: Skill;
}

const SkillElement = ({ skill }: SkillElementProps) => {
	return (
		<div className="relative group p-1 h-12 w-48 flex">
			<div className="relative rounded-lg items-center justify-center flex bg-black w-full h-8">
				<img className="rounded-lg" src={skill.icon} alt={skill.name} />
			</div>
		</div>
	);
};

export default SkillElement;
