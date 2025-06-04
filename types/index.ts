export type Skill = {
	name: string;
	icon: string;
};

export type Experience = {
	title: {
		en: string;
		id: string;
	};
	company: string;
	location: string;
	href?: string | null;
	from: string;
	to?: string | null;
	description: {
		en: string;
		id: string;
	};
	skills: string[];
};

export type Project = {
	thumbnail?: string | null;
	media: string;
	mediaDescription: {
		en: string;
		id: string;
	};
	href?: string | null;
	deployedOn?: string | null;
	id: string;
	title: string;
	about: {
		en: string;
		id: string;
	};
	description: {
		en: React.ReactNode;
		id: React.ReactNode;
	};
	skills: Skill[];
	date: string;
};
