import DROPBOX_CONTENT from "@/constants/dropboxcontent";
import { Project } from "@/types";

import {
	NYC_TLC_DESCRIPTION_EN,
	NYC_TLC_DESCRIPTION_ID,
	SUPERSTORE_DESCRIPTION_EN,
	SUPERSTORE_DESCRIPTION_ID,
	SIDO_DESCRIPTION_EN,
	SIDO_DESCRIPTION_ID
} from "./descriptions";

const PROJECTS: Project[] = [
	{ // Customer Lifetime Value
		media: DROPBOX_CONTENT.media_customer_lifetime_value,
		mediaDescription: {
			en: "RFM-based CLV analysis with segmentation and retention strategy for e-commerce customers.",
			id: "",
		},
		date: "06/2025",
		title: "Customer Lifetime Value Prediction",
		id: "Customer-Lifetime-Value",
		about: {
			en: "A data-driven project that calculates and segments Customer Lifetime Value (CLV) using RFM and probabilistic models.",
			id: "",
		},
		description: {
			en: SIDO_DESCRIPTION_EN(),
			id: SIDO_DESCRIPTION_ID(),
		},
		skills: [
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "RFM Analysis",
				icon: "https://img.shields.io/badge/-rfm-informational?style=for-the-badge&color=black&logo=rfm",
			},
			{
				name: "TensorFlow",
				icon: "https://img.shields.io/badge/-TensorFlow-informational?style=for-the-badge&color=black&logo=TensorFlow",
			},
			{
				name: "Pandas",
				icon: "https://img.shields.io/badge/-Pandas-informational?style=for-the-badge&color=black&logo=Pandas",
			},
			{
				name: "Matplotlib",
				icon: "https://img.shields.io/badge/-Matplotlib-informational?style=for-the-badge&color=black&logo=Matplotlib",
			},
			{
				name: "Plotly",
				icon: "https://img.shields.io/badge/-Plotly-informational?style=for-the-badge&color=black&logo=Plotly",
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
	{ // Forecasting Sido
		media: DROPBOX_CONTENT.media_forecasting_sido,
		mediaDescription: {
			en: "LSTM-based time series model forecasting herbal product sales of PT Sido Muncul, visualized with Plotly.",
			id: "",
		},
		date: "06/2025",
		title: "LSTM Forecasting for PT Sido Muncul Sales",
		id: "Forecasting-Sido",
		about: {
			en: "A deep learning forecasting project using LSTM to predict monthly sales for a leading Indonesian herbal company.",
			id: "",
		},
		description: {
			en: SIDO_DESCRIPTION_EN(),
			id: SIDO_DESCRIPTION_ID(),
		},
		skills: [
			{
				name: "Python",
				icon: "https://img.shields.io/badge/-python-informational?style=for-the-badge&color=black&logo=python",
			},
			{
				name: "LTSM",
				icon: "https://img.shields.io/badge/-ltsm-informational?style=for-the-badge&color=black&logo=ltsm",
			},
			{
				name: "TensorFlow",
				icon: "https://img.shields.io/badge/-TensorFlow-informational?style=for-the-badge&color=black&logo=TensorFlow",
			},
			{
				name: "Time Series Forecasting",
				icon: "https://img.shields.io/badge/-Time-Series-Forecasting-informational?style=for-the-badge&color=black&logo=Time Series Forecasting",
			},
			{
				name: "Pandas",
				icon: "https://img.shields.io/badge/-Pandas-informational?style=for-the-badge&color=black&logo=Pandas",
			},
			{
				name: "Plotly",
				icon: "https://img.shields.io/badge/-Plotly-informational?style=for-the-badge&color=black&logo=Plotly",
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
	{ // NYC-TLC
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
	{ // Superstore
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
			en: SUPERSTORE_DESCRIPTION_EN(),
			id: SUPERSTORE_DESCRIPTION_ID(),
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
	},
];

export default PROJECTS;
