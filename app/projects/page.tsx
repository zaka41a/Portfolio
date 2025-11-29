import SectionHeading from '@/components/ui/section-heading'
import ProjectCard from '@/components/project-card'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'Projects · Zakaria Sabiri',
  description: 'Complete catalog of projects developed by Zakaria Sabiri.',
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto w-[min(1100px,92vw)] py-16">
      <SectionHeading
        eyebrow="Projects"
        title="Complete Catalog"
        description="Each project explores a real-world problem with an appropriate stack and documented architecture decisions."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
