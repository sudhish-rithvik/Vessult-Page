import { ProjectsHeroSection } from '../components/sections/ProjectsHeroSection'
import { ProjectFilterSection } from '../components/sections/ProjectFilterSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { WhyVessultSection } from '../components/sections/WhyVessultSection'
import { WorkflowSection } from '../components/sections/WorkflowSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'

export function ProjectsPage() {
  return (
    <>
      <ProjectsHeroSection />
      <ProjectFilterSection />
      <ProjectsSection />
      <WhyVessultSection />
      <WorkflowSection />
      <TestimonialsSection />
    </>
  )
}
