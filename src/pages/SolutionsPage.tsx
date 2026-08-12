import { SolutionsHeroSection } from '../components/sections/SolutionsHeroSection'
import { SolutionsTabsSection } from '../components/sections/SolutionsTabsSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { PCBSection } from '../components/sections/PCBSection'
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection'

export function SolutionsPage() {
  return (
    <>
      <SolutionsHeroSection />
      <SolutionsTabsSection />
      <ServicesSection />
      <PCBSection />
      <CaseStudiesSection />
    </>
  )
}
