interface ProjectSectionProps {
	title: string;
	overview: string;
	challenge: string;
	approach: string[];
	results: string[];
  }
  
  export default function ProjectSection({
	title,
	overview,
	challenge,
	approach,
	results,
  }: ProjectSectionProps) {
	return (
	  <div className="space-y-10 max-w-5xl">
		{/* Title + intro */}
		<div className="space-y-4">
		  <h2 className="text-4xl font-bold tracking-tight text-foreground">
			{title}
		  </h2>
		  <p className="text-lg text-foreground/80">{overview}</p>
		</div>
  
		{/* Challenge */}
		<div className="space-y-3">
		  <h3 className="text-xl font-semibold text-foreground">Challenge</h3>
		  <p className="text-foreground/80 leading-relaxed">{challenge}</p>
		</div>
  
		{/* Approach */}
		<div className="space-y-3">
		  <h3 className="text-xl font-semibold text-foreground">Approach</h3>
		  <ul className="space-y-2 list-disc pl-6 text-foreground/80">
			{approach.map((item, i) => (
			  <li key={i}>{item}</li>
			))}
		  </ul>
		</div>
  
		{/* Results */}
		<div className="space-y-3">
		  <h3 className="text-xl font-semibold text-foreground">Key Results</h3>
		  <ul className="space-y-2 list-disc pl-6 text-foreground/80">
			{results.map((item, i) => (
			  <li key={i}>{item}</li>
			))}
		  </ul>
		</div>
  
		<div className="h-px bg-border my-16" />
	  </div>
	);
  }