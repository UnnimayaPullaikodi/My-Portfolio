export interface WorksItem {
	title: string;
	overview: string;
	challenge: string;
	approach: string[];
	results: string[];
}

export const works: WorksItem[] = [
	
		{
				title: "Future Learn Portal",
			  
				overview:
				  "Designed and implemented a scalable, role-based case management solution to manage course request submissions from initial intake through approval and final enrollment, using Microsoft Power Platform and Dataverse.",
			  
				challenge:
				  "The existing process for handling course requests was manual and fragmented, with limited visibility into request status, unclear ownership across roles, and minimal governance. This led to delays, inconsistent handling of requests, and heavy reliance on email coordination.",
			  
				approach: [
				  "Designed a Model-driven App on Dataverse to centralize all course request data and lifecycle stages",
				  "Implemented role-based security to ensure appropriate access for requesters, reviewers, and administrators",
				  "Built multi-level approval workflows using Power Automate aligned with organizational governance rules",
				  "Automated status transitions and notifications to reduce manual follow-ups and improve accountability",
				  "Structured the data model to support reporting and future scalability",
				],
			  
				results: [
				  "Standardized and streamlined the entire course request lifecycle from submission to enrollment",
				  "Improved governance through clearly defined roles, approvals, and audit visibility",
				  "Increased transparency for stakeholders with real-time status tracking",
				  "Reduced manual coordination, emails, and process delays",
				],
			  },
		{
			title: "Risk Management System",

  overview:
    "Designed and implemented a governance-driven Risk Management System using Microsoft Power Platform to automate end-to-end risk assessment, tracking, and approval processes across stakeholders.",

  challenge:
    "Risk assessments were previously managed through manual tracking methods with inconsistent documentation, limited visibility into approval stages, and no standardized governance process. This made it difficult for stakeholders to monitor risk status, ensure accountability, and maintain audit readiness.",

  approach: [
    "Designed a structured data model in Dataverse to manage risk records, categories, and lifecycle stages",
    "Built a Model-driven App to centralize risk submission, review, and tracking in a single system",
    "Developed multi-stage approval workflows using Power Automate aligned with defined governance rules",
    "Implemented role-based security to ensure appropriate access for reviewers, approvers, and administrators",
    "Created dashboards and maintained detailed process documentation to support stakeholder visibility and user adoption",
  ],

  results: [
    "Standardized the risk assessment and approval lifecycle across teams",
    "Improved transparency and accountability with real-time risk status tracking",
    "Reduced manual tracking efforts and follow-ups through workflow automation",
    "Enabled a governance-aligned process that supports audit and compliance requirements",
  ],
		  },
	/*{
		image: "/placeholder-1.jpg",
		title: "Project 2",
		description: "Project Description.",
		link: "https://example.com/project-2",
	},*/
];
