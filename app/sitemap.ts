import { MetadataRoute } from "next";

import PROJECTS from "@/constants/projects/projects";

type Site = {
	url: string;
	lastModified: Date;
	changeFrequency:
		| "always"
		| "hourly"
		| "daily"
		| "weekly"
		| "monthly"
		| "yearly"
		| "never";
	priority: number;
};

export default function sitemap(): MetadataRoute.Sitemap {
	const projectPages: Site[] = PROJECTS.map((project) => ({
		url: `${process.env.BASE_URL}/projects/${project.id}`,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 0.8,
	}));

	return [
		...projectPages,
		{
			url: `${process.env.BASE_URL}/`,
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1,
		},
		{
			url: `${process.env.BASE_URL}/projects`,
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: 0.6,
		},
	];
}
