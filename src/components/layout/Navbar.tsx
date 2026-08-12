import { useLocation } from 'react-router-dom'
// @ts-ignore
import PillNav from './PillNav'

const NAV_ITEMS = [
  { href: '/',              label: 'Home'         },
  { href: '/solutions',     label: 'Solutions'    },
  { href: '/industries',    label: 'Industries'   },
  { href: '/projects',      label: 'Projects'     },
  { href: '/technologies',  label: 'Technologies' },
  { href: '/contact',       label: 'Contact'      },
]

/**
 * Navbar — wraps PillNav with route-based active state tracking.
 * Active item is determined by matching the current pathname.
 */
export function Navbar() {
  const { pathname } = useLocation()

  // Match active nav item: exact match for '/', startsWith for all others
  const activeHref =
    NAV_ITEMS.find(item =>
      item.href === '/'
        ? pathname === '/'
        : pathname.startsWith(item.href)
    )?.href ?? '/'

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
