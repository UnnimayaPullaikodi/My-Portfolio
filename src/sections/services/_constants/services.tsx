import {
	FigmaLogoIcon,
	FileIcon,
	FilePlusIcon,
	FileTextIcon,
	GitHubLogoIcon,
	PersonIcon,
} from "@radix-ui/react-icons";
import type { ReactNode } from "react";
import { CleanCodeCardContent } from "@/sections/services/_components/clean-code-card-content";
import {
	ConvertingCardContent,
	type ConvertingCardIconSet,
} from "@/sections/services/_components/converting-card-content";
import { ServicesCardContent } from "@/sections/services/_components/services-card-content";

export interface ServiceItem {
	name: string;
	description: string;
}

export interface ServiceFeature {
	name: string;
	description: string;
	href: string;
	className: string;
	background: ReactNode;
}

const convertingCardIcons: ConvertingCardIconSet = {
	destination: {
		id: "client",
		Icon: PersonIcon,
	},
	hub: {
		id: "handoff",
		Icon: FigmaLogoIcon,
	},
	sources: [
		{
			id: "brief",
			Icon: FileTextIcon,
		},
		{
			id: "spec",
			Icon: FilePlusIcon,
		},
		{
			id: "assets",
			Icon: FileIcon,
		},
		{
			id: "repo",
			Icon: GitHubLogoIcon,
		},
	],
};

export const serviceItems: ServiceItem[] = [
	{
		name: "Power Platform & Dynamics 365 Specialist",
		description:
			"Power Platform & Dynamics 365 Analyst with 2+ years of experience designing low-code solutions that translate business requirements into automated, scalable workflows.",
	},
	{
		name: "Workflow Automation & Optimization",
		description:
			"Designed and deployed Power Apps and Power Automate solutions to streamline approvals, case management, and operational processes across business teams.",
	},
	{
		name: "Integration & Custom Development",
		description:
			"Built integrations using C#, JavaScript, REST APIs, Azure Logic Apps, and Dataverse to enable secure, seamless data flow between systems.",
	},
	{
		name: "Requirements & Stakeholder Collaboration",
		description:
			"Collaborated with business stakeholders to gather requirements, document processes, support UAT, and ensure successful solution adoption.",
	},
	{
		name: "Agile Delivery & DevOps",
		description:
			"Worked in Agile/Scrum teams using Git and Azure DevOps, contributing to testing, debugging, deployments, and continuous system improvement.",
	},
];

export const bestPractices: ServiceItem[] = [
	{
		name: "Power Platform",
		description:
			"Power Apps (Canvas & Model-Driven), Power Automate (Cloud Flows, Approvals), Dataverse, SharePoint Online, Teams Integration.",
	},
	{
		name: "Dynamics 365",
		description:
			"Dynamics 365 CE, entities, forms, business rules, plugins, ribbon customization, business process flows.",
	},
	{
		name: "Programming & Frameworks",
		description:
			"C#, .NET, JavaScript, TypeScript, PCF Controls, REST APIs, OData, FetchXML, Web Services.",
	},
	{
		name: "Databases",
		description:
			"Microsoft SQL Server, Dataverse, MongoDB, MySQL.",
	},
	{
		name: "Integration & Tools",
		description:
			"Azure Logic Apps, Postman, JSON, Git, Azure DevOps, Microsoft 365.",
	},
	{
		name: "AI & Advanced Projects",
		description:
			"Built a Voice Biometrics Authentication System using ECAPA-TDNN and Pinecone vector database for secure speaker verification.",
	},
];

export const serviceFeatures: ServiceFeature[] = [
	{
		name: "About Me",
		description:
			"Power Platform & Dynamics 365 Analyst focused on automation, integration, and scalable business solutions.",
		href: "#",
		className: "col-span-1",
		background: <ServicesCardContent items={serviceItems} />,
	},
	{
		name: "Technical Skillset",
		description:
			"Core technologies, tools, and platforms I use to design and deliver enterprise solutions.",
		href: "#",
		className: "col-span-1",
		background: <CleanCodeCardContent items={bestPractices} />,
	},
	{
		name: "From Requirement to Deployment",
		description:
			"How I translate business needs into automated workflows, integrations, and production-ready solutions.",
		href: "#",
		className: "col-span-1",
		background: <ConvertingCardContent icons={convertingCardIcons} />,
	},
];