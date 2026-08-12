import { TechHeroSection } from '../components/sections/TechHeroSection'
import { TechExplorerSection } from '../components/sections/TechExplorerSection'
import { BenchmarksSection } from '../components/sections/BenchmarksSection'
import { TechStackSection } from '../components/sections/TechStackSection'

export function TechnologiesPage() {
  return (
    <>
      <TechHeroSection />
      <TechExplorerSection />
      <BenchmarksSection />
      <TechStackSection />
    </>
  )
}
