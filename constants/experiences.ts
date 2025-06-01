import { Experience } from "@/types";

const EXPERIENCES: Experience[] = [
	{
		title: {
			en: "Project Lead",
			fi: "Projektivastaava",
		},
		company: "Junction",
		from: "05/2025",
		href: "https://www.hackjunction.com",
		to: null,
		location: "Helsinki, Finland",
		description: {
			en: "(Volunteer) Helping the CTO of Junction to manage the platform source code refactoring & overseeing the overhaul of the frontend styling. Guiding a team of volunteer developers executing these tasks and assisting them with various technical and non-technical questions.",
			fi: "(Vapaaehtoistyö) Avustan Junctionin CTOta hallitsemaan Junction-platformin lähdekoodin refaktorointityötä ja valvon tyylittelyn uudistusta. Luotsin vapaaehtoisten ohjelmoijien tiimiä, ohjaan heitä etenemään työssä ja autan kysymyksissä.",
		},
		skills: [],
	},
	{
		title: {
			en: "Frontend Developer Trainee",
			fi: "Frontend-kehittäjä Trainee",
		},
		company: "Alma Media",
		from: "04/2025",
		href: "https://www.almamedia.fi",
		to: null,
		location: "Helsinki, Finland",
		description: {
			en: "Working on various distinct Alma Mobility Marketplace web applications, such as Rekkari.fi and Oma Ajo, with a focus on frontend development. Gaining hands-on experience in software development within a large Finnish digital service company. Learning to collaborate with different teams and professionals, while also developing an understanding of the needs and perspectives of various stakeholders involved in the product development process.",
			fi: "Työskentelen useiden eri Alma Liikkumisen Markkinapaikkojen verkkosovellusten parissa, kuten Rekkari.fi ja Oma Ajo, keskittyen erityisesti frontend-kehitykseen. Kerrytän käytännön kokemusta ohjelmistokehityksestä suuressa suomalaisessa digitaalisten palveluiden yrityksessä. Opin tekemään yhteistyötä eri tiimien ja ammattilaisten kanssa, samalla kun syvennän ymmärrystäni tuotekehitykseen osallistuvien sidosryhmien tarpeista ja näkökulmista.",
		},
		skills: [
			"Docker",
			"Jira",
			"Figma",
			"Scrum",
			"TypeScript",
			"JavaScript",
			"Confluence",
		],
	},
	{
		title: {
			en: "Freelance Developer",
			fi: "Freelance-ohjelmistokehittäjä",
		},
		company: "Aufwin Defence Systems Oy",
		from: "07/2024",
		href: "https://aufwindefence.fi",
		to: "04/2025",
		location: "Helsinki, Finland",
		description: {
			en: "Participating in the development of various IoT system integrations and contributing to building large-scale software infrastructure. Responsibilities include interfacing with partner firms, consulting with clients, and participating in system design.",
			fi: "Erinäisten IoT-järjestelmäintegraatioiden toteutusta ja työtä monimutkaisten ohjelmistokokonaisuuksien kanssa. Työnkuvaan kuuluu myös yhteydenpito partnerifirmojen kanssa ja kosultointi asiakastapaamisten välityksellä. Olen myös osallistunut järjestelmäsuunnitteluun yleisesti.",
		},
		skills: ["AWS", "Python", "Docker"],
	},
	{
		title: {
			en: "Entrepreneur",
			fi: "Yrittäjä",
		},
		company: "Tmi Christian",
		from: "07/2024",
		href: "https://joonakettunen.dev",
		to: "04/2025",
		location: "Helsinki, Finland",
		description: {
			en: "Operating a registered business under my own trade name as a freelance developer. Responsible for managing all aspects of the business, including taxes, billing, and accounting, while delivering high-quality development services to clients.",
			fi: "Korkealaatuisten ohjelmistojen ja ohjelmointipalveluiden tarjontaa oman toiminimen kautta freelance-kehittäjänä. Vastuussa kaikista yrityksen osa-alueista, kuten verotuksesta, laskutuksesta ja kirjanpidosta.",
		},
		skills: [],
	},
];

export default EXPERIENCES;
