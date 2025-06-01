export type Skill = {
	name: string;
	icon: string;
};

export type Experience = {
	title: {
		en: string;
		fi: string;
	};
	company: string;
	location: string;
	href?: string | null;
	from: string;
	to?: string | null;
	description: {
		en: string;
		fi: string;
	};
	skills: string[];
};

export type Project = {
	thumbnail?: string | null;
	media: string;
	mediaDescription: {
		en: string;
		fi: string;
	};
	href?: string | null;
	deployedOn?: string | null;
	id: string;
	title: string;
	about: {
		en: string;
		fi: string;
	};
	description: {
		en: React.ReactNode;
		fi: React.ReactNode;
	};
	skills: Skill[];
	date: string;
};
