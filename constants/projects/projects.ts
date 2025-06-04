import DROPBOX_CONTENT from "@/constants/dropboxcontent";
import { Project } from "@/types";

import {
	NYC_TLC_DESCRIPTION_EN,
	NYC_TLC_DESCRIPTION_ID,
	VISUALPATHFINDER_DESCRIPTION_EN,
	VISUALPATHFINDER_DESCRIPTION_ID,
} from "./descriptions";

const PROJECTS: Project[] = [
	{
		media: DROPBOX_CONTENT.media_nyc_tlc,
		mediaDescription: {
			en: "A visual analytics project using NYC Taxi trip data to reveal when and where drivers earn the most. Features include heatmaps, borough comparisons, and time based insights built with Python and Tableau.",
			id: "Proyek analitik visual menggunakan data perjalanan taksi NYC untuk mengungkap waktu dan lokasi dengan penghasilan tertinggi. Menampilkan heatmap, perbandingan antar wilayah, dan wawasan berbasis waktu dibangun dengan Python dan Tableau.",
		},
		date: "05/2025",
		title: "NYC-TLC",
		id: "NYC-TLC",
		about: {
			en: "A data-driven analysis of NYC taxi trips to uncover when and where drivers earn the most.",
			id: "Analisis berbasis data terhadap perjalanan taksi di NYC untuk mengungkap kapan dan di mana pengemudi mendapatkan penghasilan tertinggi.",
		},
		description: {
			en: NYC_TLC_DESCRIPTION_EN(),
			id: NYC_TLC_DESCRIPTION_ID(),
		},
		skills: [
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "Tableau",
				icon: "https://img.shields.io/badge/-tableau-informational?style=for-the-badge&color=black&logo=tableau",
			},
			{
				name: "Jupyter",
				icon: "https://img.shields.io/badge/-jupyter-informational?style=for-the-badge&color=black&logo=jupyter",
			}
		],
	},
	{
		media: DROPBOX_CONTENT.media_superstore,
		mediaDescription: {
			en: "The smaller map is interactive and shows the pathfinding result. So-called 'Virtual Maps' are non-interactive and won't display any results. However, they are vastly larger and therefore yield more interesting pathfinding results.",
			id: "Pienempi kartta on interaktiivinen ja siinä näkyy reitinhakutulokset. Niin sanotut 'virtuaalikartat' eivät ole interaktiivisia eivätkä näytä tuloksia, mutta ne ovat huomattavasti suurempia ja siksi tulosten kannalta ehkä mielenkiintoisempia.",
		},
		thumbnail: DROPBOX_CONTENT.thumbnail_visualpathfinder,
		date: "03/2024",
		title: "Visual Pathfinder",
		id: "visualpathfinder",
		about: {
			en: "A visual pathfinding tool to compare three different pathfinding algorithms.",
			id: "Visuaalinen reitinhakutyökalu, jolla voi vertailla kolmea eri reitinhakualgoritmia.",
		},
		description: {
			en: VISUALPATHFINDER_DESCRIPTION_EN(),
			id: VISUALPATHFINDER_DESCRIPTION_ID(),
		},
		skills: [
			{
				name: "JavaScript",
				icon: "https://img.shields.io/badge/-JavaScript-informational?style=for-the-badge&color=black&logo=javascript",
			},
			{
				name: "TypeScript",
				icon: "https://img.shields.io/badge/-TypeScript-informational?style=for-the-badge&color=black&logo=typescript",
			},
			{
				name: "Radix UI",
				icon: "https://img.shields.io/badge/Radix%20UI-informational?style=for-the-badge&color=black&logo=radix-ui&logoColor=red",
			},
			{
				name: "HTML5",
				icon: "https://img.shields.io/badge/-HTML5-informational?style=for-the-badge&color=black&logo=html5",
			},
			{
				name: "Tailwind CSS",
				icon: "https://img.shields.io/badge/-TailwindCSS-informational?style=for-the-badge&color=black&logo=tailwindcss",
			},
			{
				name: "React",
				icon: "https://img.shields.io/badge/-React-informational?style=for-the-badge&color=black&logo=react",
			},
			{
				name: "Next.js",
				icon: "https://img.shields.io/badge/Next-informational?style=for-the-badge&color=black&logo=next.js&logoColor=white",
			},
			{
				name: "Vercel",
				icon: "https://img.shields.io/badge/Vercel-%23000000.svg?style=for-the-badge&color=black&logo=vercel&logoColor=white",
			},
			{
				name: "Node.js",
				icon: "https://img.shields.io/badge/-Node-informational?style=for-the-badge&color=black&logo=node.js",
			},
			{
				name: "Jest",
				icon: "https://img.shields.io/badge/-Jest-informational?style=for-the-badge&color=black&logo=jest&logoColor=red",
			},
			{
				name: "ChatGPT",
				icon: "https://img.shields.io/badge/ChatGPT-informational?style=for-the-badge&color=black&logo=openai&logoColor=green",
			},
			{
				name: "Dependabot",
				icon: "https://img.shields.io/badge/Dependabot-informational?style=for-the-badge&color=black&logo=dependabot&logoColor=blue",
			},
			{
				name: "Git",
				icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&color=black&logo=git&logoColor=red",
			},
			{
				name: "Webpack",
				icon: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=white&color=black",
			},
		],
	}
];

export default PROJECTS;
