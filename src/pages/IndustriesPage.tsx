import { IndustriesSection } from '../components/sections/IndustriesSection'
import { FeaturesSection } from '../components/sections/FeaturesSection'
import { StatsSection } from '../components/sections/StatsSection'
import { GlobalPresenceSection } from '../components/sections/GlobalPresenceSection'

export function IndustriesPage() {
  return (
    <>
      <div className="pt-20">
        <IndustriesSection />
        <FeaturesSection />
        <StatsSection />
        <GlobalPresenceSection />
      </div>
    </>
  )
}
