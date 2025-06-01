"use client";

import { Skill } from "@/types";

const SKILLS: Skill[] = [
	{
		name: "GitHub Actions",
		icon: "https://img.shields.io/badge/GitHub%20Actions-%232671E5.svg?style=for-the-badge&color=black&logo=githubactions",
	},
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
		name: "Poetry",
		icon: "https://img.shields.io/badge/Poetry-%233B82F6.svg?style=for-the-badge&color=black&logo=poetry",
	},
	{
		name: "Python",
		icon: "https://img.shields.io/badge/-Python-informational?style=for-the-badge&color=black&logo=python",
	},
	{
		name: "MongoDB",
		icon: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&color=black&logo=mongodb",
	},
	{
		name: "Postgres",
		icon: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&color=black&logo=postgresql",
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
		name: "Docker",
		icon: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&color=black",
	},
	{
		name: "Cypress",
		icon: "https://img.shields.io/badge/-Cypress-%23E5E5E5?style=for-the-badge&color=black&logo=cypress",
	},
	{
		name: "Git",
		icon: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&color=black&logo=git&logoColor=red",
	},
	{
		name: "Redis",
		icon: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&color=black&logo=redis",
	},
	{
		name: "Firebase",
		icon: "https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&color=black&logoColor=ffcd34",
	},
	{
		name: "Apollo GraphQL",
		icon: "https://img.shields.io/badge/-ApolloGraphQL-311C87?style=for-the-badge&logo=apollo-graphql&color=black",
	},
	{
		name: "Flask",
		icon: "https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&color=black",
	},
	{
		name: "Webpack",
		icon: "https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&color=black",
	},
	{
		name: "Zod",
		icon: "https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=blue&color=black",
	},
	{
		name: "Rasperry Pi",
		icon: "https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&color=black&logo=Raspberry-Pi",
	},
	{
		name: "Boostrap",
		icon: "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&color=black&logo=bootstrap",
	},
	{
		name: "ROS",
		icon: "https://img.shields.io/badge/ros-%230A0FF9.svg?style=for-the-badge&logo=ros&color=black",
	},
	{
		name: "Express",
		icon: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&color=black&logo=express&logoColor=%2361DAFB",
	},
	{
		name: "JWT",
		icon: "https://img.shields.io/badge/JWT-black?style=for-the-badge&color=black&logo=JSON%20web%20tokens",
	},
	{
		name: "Pytest",
		icon: "https://img.shields.io/badge/pytest-%23ffffff.svg?style=for-the-badge&color=black&logo=pytest&logoColor=2f9fe3",
	},
	{
		name: "RabbitMQ",
		icon: "https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&color=black&logo=rabbitmq",
	},
	{
		name: "SASS",
		icon: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&color=black&logo=SASS&logoColor=hotpink",
	},
	{
		name: "React Query",
		icon: "https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&color=black&logo=react%20query",
	},
	{
		name: "React Router",
		icon: "https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&color=black&logo=react-router",
	},
	{
		name: "React Hook Form",
		icon: "https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&color=black&logo=reacthookform",
	},
	{
		name: "Redux",
		icon: "https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&color=black&logo=redux&logoColor=purple",
	},
	{
		name: "Vite",
		icon: "https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&color=black&logo=vite",
	},
	{
		name: "GO",
		icon: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&color=black&logo=go&logoColor=blue",
	},
	{
		name: "Confluence",
		icon: "https://img.shields.io/badge/confluence-%23172BF4.svg?style=for-the-badge&logo=confluence&color=black&logoColor=blue",
	},
	{
		name: "Jira",
		icon: "https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&color=black&logoColor=blue",
	},
	{
		name: "Figma",
		icon: "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&color=black&logoColor=orange",
	},
];

export default SKILLS;
