import { StarIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { serviceFeatures } from "@/sections/services/_constants/services";

import { ServiceCard as Card } from "./_components/service-card";

export default function Services() {
	return (
		<Section
			id="services"
			title="About Me & Expertise"
			description="Power Platform & Dynamics 365 Analyst specializing in low-code automation, integrations, and business process optimization."
			className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
			badgeText="Profile"
			badgeIcon={<StarIcon aria-hidden="true" />}
		>
			{serviceFeatures.map((feature) => {
				const featureId = `service-title-${feature.name
					.toLowerCase()
					.replace(/\s+/g, "-")}`;

				return (
					<Card key={feature.name} {...feature} aria-labelledby={featureId} />
				);
			})}
		</Section>
	);
}
