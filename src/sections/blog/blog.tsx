import { ReaderIcon } from "@radix-ui/react-icons";
import Section from "@/components/layout/section";
import BlogCard from "@/sections/blog/_components/blog-card";
import type { PostMeta } from "@/sections/blog/_server/posts";

type BlogSectionProps = {
	posts: PostMeta[];
};

export default function Blog({ posts }: BlogSectionProps) {
	const hasPosts = posts && posts.length > 0;

	return (
		<Section
			id="blog"
			title="Exploring Dynamics 365 CE and Power Platform"
			description="Explore my latest insights, lessons learned, and innovative solutions from real-world Power Platform and Dynamics 365 CE projects, including apps, workflows, and dashboards that drive business impact."
			className="grid grid-cols-1 gap-4 md:grid-cols-2"
			badgeText="Latest posts"
			badgeIcon={<ReaderIcon aria-hidden="true" className="size-3.5" />}
		>
			{hasPosts ? (
				posts.map((post) => <BlogCard key={post.slug} meta={post} />)
			) : (
				<p className="text-sm text-foreground/60">
					No posts yet — add an MDX file in <code>src/content/posts</code> to
					populate this grid.
				</p>
			)}
		</Section>
	);
}
