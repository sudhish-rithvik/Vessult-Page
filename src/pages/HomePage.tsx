import { HeroSection } from '../components/sections/HeroSection'
import { StatsSection } from '../components/sections/StatsSection'
import { CorporateHQSection } from '../components/sections/CorporateHQSection'
import { AboutSection } from '../components/sections/AboutSection'
import { GlobalPresenceSection } from '../components/sections/GlobalPresenceSection'

export function HomePage() {
  return (
    <>
      {/* Hero + animated counters */}
      <HeroSection />
      <StatsSection />

      {/* Building image + company description */}
      <CorporateHQSection />

      {/* Mission / Vision / Values pillars */}
      <AboutSection />

      {/* Global offices */}
      <GlobalPresenceSection />
    </>
  )
}

