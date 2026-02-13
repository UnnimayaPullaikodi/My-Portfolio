export interface FaqItem {
	question: string;
	answer: string;
}

export const faqItems: FaqItem[] = [
	{
		question: "What type of CRM / Power Platform work do you specialize in?",
		answer:
			"I focus on building solutions with Dynamics 365 CE (Sales, Customer Service, Marketing) and Power Platform (Power Apps, Power Automate, Power BI, Dataverse) for small to medium teams and various industries.",
	},
	{
		question: "How should I describe my process?",
		answer:
			"My process usually starts with discovery, then design and prototyping, followed by development, testing, and deployment. I keep communication clear and provide updates throughout.",
	},
	{
		question: "Which Power Platform apps do you work on?",
		answer:
			"I primarily build Canvas & Model-Driven apps, automated workflows with Power Automate, and dashboards/reports in Power BI to help businesses streamline operations.",
	},
	{
		question: "Do you customize Dynamics 365 CE?",
		answer:
			"Yes, I tailor CE modules like Sales, Customer Service, and Marketing with workflows, plugins, and custom components to match business needs.",
	},
	{
		question: "Can you integrate these solutions with other systems?",
		answer:
			"Absolutely. I connect Dynamics 365 and Power Platform to SharePoint, Teams, Azure, SQL, and third-party APIs to unify data and automate processes.",
	},
	{
		question: "Do you help with app or workflow optimization?",
		answer:
			"Absolutely. Let people know if youre booking a month out, available instantly, or only taking on retainers. It saves back-and-forth and sets an immediate expectation.",
	},
	
];

export const faqItemsMobile: FaqItem[] = [
	{
		question: "What projects fit here?",
		answer:
			"Describe the type of work you love doing and who its for so new leads know theyre in the right place.",
	},
	{
		question: "Whats the process?",
		answer:
			"Outline your workflow at a high level discovery, build, launch to show how organized you are.",
	},
	{
		question: "How fast can things ship?",
		answer:
			"Give a rough range for common engagements and call out what makes timelines move up or down.",
	},
	{
		question: "How do we collaborate?",
		answer:
			"List the tools you prefer and whether you plug into existing teams, handle communication async, or lead the project.",
	},
	{
		question: "What tools do you use?",
		answer:
			"Share your primary stack or platforms. People searching for a specialist will thank you.",
	},
	{
		question: "Are you available?",
		answer:
			"Let folks know if youre open for new work now, booking next quarter, or taking on limited engagements.",
	},
	{
		question: "How do you price projects?",
		answer:
			"Reference your preferred model (fixed scope, sprint-based, or retainers) and invite people to request a quote.",
	},
	{
		question: "Need something else?",
		answer:
			"Remind visitors they can always message you through the contact form for anything not covered here.",
	},
];
