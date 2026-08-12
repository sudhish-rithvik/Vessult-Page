import { AboutSection } from '../components/sections/AboutSection'
import { CorporateHQSection } from '../components/sections/CorporateHQSection'
import { LeadershipSection } from '../components/sections/LeadershipSection'
import { GlobalPresenceSection } from '../components/sections/GlobalPresenceSection'
import { ContactSection } from '../components/sections/ContactSection'

export function AboutPage() {
  return (
    <>
      <div className="pt-20">
        <AboutSection />
        <CorporateHQSection />
        <LeadershipSection />
        <GlobalPresenceSection />
        <ContactSection />
      </div>
    </>
  )
}
