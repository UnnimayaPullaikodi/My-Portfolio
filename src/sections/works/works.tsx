import { GridIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import { works } from "@/sections/works/_constants/works";
import WorksCard from "./_components/works-card";

export default function Works() {
  return (
    <Section
      id="works"
      title="Featured Projects"
      description="Enterprise solutions showcasing Dynamics 365, Power Platform, and workflow automation."
      className="space-y-24"   // ❌ no grid anymore
      badgeText="Featured projects"
      badgeIcon={<GridIcon aria-hidden="true" className="size-3.5" />}
    >
      {works.map((item) => (
        <WorksCard
          key={item.title}
          title={item.title}
          overview={item.overview}
          challenge={item.challenge}
          approach={item.approach}
          results={item.results}
        />
      ))}
    </Section>
  );
}