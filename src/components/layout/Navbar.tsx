import { useEffect, useState } from 'react'
// @ts-ignore
import PillNav from './PillNav'

const NAV_ITEMS = [
  { href: '#home',         label: 'Home'         },
  { href: '#about',        label: 'About'         },
  { href: '#solutions',    label: 'Solutions'     },
  { href: '#industries',   label: 'Industries'    },
  { href: '#projects',     label: 'Projects'      },
  { href: '#technologies', label: 'Technologies'  },
  { href: '#contact',      label: 'Contact'       },
]

/**
 * Navbar — wraps PillNav with intersection-observer active-section tracking.
 */
export function Navbar() {
  const [activeHref, setActiveHref] = useState('#home')

  /* Track which section is in view */
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map(i => i.href.replace('#', ''))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`)
          }
        })
      },
      { threshold: 0.35 }
    )

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <PillNav
      logo="/logo.png"
      logoAlt="Vessult Systems"
      items={NAV_ITEMS}
      activeHref={activeHref}
      initialLoadAnimation
    />
  )
}
