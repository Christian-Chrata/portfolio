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
			},
			{
				name: "Canva",
				icon: "https://img.shields.io/badge/-canva-informational?style=for-the-badge&color=black&logo=canva",
			}
		],
	},
	{
		media: DROPBOX_CONTENT.media_superstore,
		mediaDescription: {
			en: "Interactive dashboard project using Superstore sales data to explore trends in categories, profits, and customer behavior. Built with Tableau and integrated into a responsive web showcase.",
			id: "Pienempi kartta on interaktiivinen ja siinä näkyy reitinhakutulokset. Niin sanotut 'virtuaalikartat' eivät ole interaktiivisia eivätkä näytä tuloksia, mutta ne ovat huomattavasti suurempia ja siksi tulosten kannalta ehkä mielenkiintoisempia.",
		},
		date: "05/2025",
		title: "Superstore",
		id: "superstore",
		about: {
			en: "Superstore Sales Analysis visualizes top-selling products and key insights from 2014–2017 retail data.",
			id: "Visuaalinen reitinhakutyökalu, jolla voi vertailla kolmea eri reitinhakualgoritmia.",
		},
		description: {
			en: VISUALPATHFINDER_DESCRIPTION_EN(),
			id: VISUALPATHFINDER_DESCRIPTION_ID(),
		},
		skills: [
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "Looker",
				icon: "https://img.shields.io/badge/-looker-informational?style=for-the-badge&color=black&logo=looker",
			},
			{
				name: "Jupyter",
				icon: "https://img.shields.io/badge/-jupyter-informational?style=for-the-badge&color=black&logo=jupyter",
			},
			{
				name: "Canva",
				icon: "https://img.shields.io/badge/-canva-informational?style=for-the-badge&color=black&logo=canva",
			}
		],
	}
];

export default PROJECTS;
