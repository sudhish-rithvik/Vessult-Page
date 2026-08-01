import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import GlassSurface from '../effects/GlassSurface';
import './PillNav.css';

/**
 * PillNav — liquid-glass floating navbar powered by React Bits GlassSurface
 */
const PillNav = ({
  logo = '/logo.png',
  logoAlt = 'Vessult Systems',
  items,
  activeHref,
  className = '',
  ease = 'power2.inOut',
  initialLoadAnimation = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentActive, setCurrentActive] = useState(activeHref);

  const hamburgerRef  = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef   = useRef(null);
  const logoRef       = useRef(null);
  const logoImgRef    = useRef(null);

  /* Sync active prop changes (from IntersectionObserver in Navbar) */
  useEffect(() => {
    setCurrentActive(activeHref);
  }, [activeHref]);

  /* ── Entry animation only ─────────────────────────────────────── */
  useEffect(() => {
    if (mobileMenuRef.current) {
      gsap.set(mobileMenuRef.current, { visibility: 'hidden', opacity: 0 });
    }

    if (!initialLoadAnimation) return;

    if (logoRef.current) {
      gsap.from(logoRef.current, { scale: 0.7, opacity: 0, duration: 0.6, ease, delay: 0.1 });
    }
  }, [ease, initialLoadAnimation]);

  /* ── Logo hover: gentle rotation ─────────────────────────────── */
  const logoTweenRef = useRef(null);
  const handleLogoEnter = () => {
    if (!logoImgRef.current) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(logoImgRef.current, {
      rotate: 360,
      duration: 0.7,
      ease: 'power1.inOut',
    });
  };
  const handleLogoLeave = () => {
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(logoImgRef.current, {
      rotate: 0,
      duration: 0.5,
      ease: 'power1.out',
    });
  };

  /* ── Smooth scroll & active state ────────────────────────────── */
  const handleNavClick = (href, e) => {
    if (e) e.preventDefault();
    setCurrentActive(href);
    if (isMobileMenuOpen) toggleMobileMenu();

    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /* ── Mobile menu toggle ──────────────────────────────────────── */
  const toggleMobileMenu = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);

    const btn = hamburgerRef.current;
    if (btn) {
      const lines = btn.querySelectorAll('.hamburger-line');
      if (next) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.4, ease });
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.4, ease });
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.4, ease });
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.4, ease });
      }
    }

    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (next) {
      gsap.set(menu, { visibility: 'visible', y: -8 });
      gsap.to(menu, { opacity: 1, y: 0, duration: 0.4, ease });
    } else {
      gsap.to(menu, {
        opacity: 0, y: -8, duration: 0.35, ease,
        onComplete: () => gsap.set(menu, { visibility: 'hidden' }),
      });
    }
  };

  return (
    <>
      <div className="pill-nav-container">
        <GlassSurface
          borderRadius={9999}
          brightness={60}
          opacity={0.9}
          blur={16}
          backgroundOpacity={0.15}
          className="pill-nav-glass-wrapper"
        >
          <nav className={`pill-nav ${className}`} aria-label="Primary">
            {/* Logo */}
            <a
              className="pill-logo"
              href={items?.[0]?.href || '#home'}
              aria-label="Vessult Home"
              onMouseEnter={handleLogoEnter}
              onMouseLeave={handleLogoLeave}
              onClick={(e) => handleNavClick(items?.[0]?.href || '#home', e)}
              ref={logoRef}
            >
              <img
                src={logo}
                alt={logoAlt}
                ref={logoImgRef}
                className="w-full h-full object-contain p-0.5"
              />
            </a>

            {/* Desktop pill items */}
            <div className="pill-nav-items desktop-only" ref={navItemsRef}>
              <ul className="pill-list" role="menubar">
                {items.map((item, i) => (
                  <li key={item.href || `item-${i}`} role="none">
                    <a
                      role="menuitem"
                      href={item.href}
                      className={`pill${currentActive === item.href ? ' is-active' : ''}`}
                      aria-label={item.ariaLabel || item.label}
                      onClick={(e) => handleNavClick(item.href, e)}
                    >
                      <span className="pill-text">{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger (mobile) */}
            <button
              ref={hamburgerRef}
              className="pill-hamburger mobile-only"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </nav>
        </GlassSurface>
      </div>

      {/* Mobile menu dropdown */}
      <div className="pill-mobile-menu mobile-only" ref={mobileMenuRef}>
        <GlassSurface borderRadius={24} backgroundOpacity={0.2} blur={20}>
          <ul className="mobile-list">
            {items.map((item, i) => (
              <li key={item.href || `mobile-${i}`}>
                <a
                  href={item.href}
                  className={`mobile-link${currentActive === item.href ? ' is-active' : ''}`}
                  onClick={(e) => handleNavClick(item.href, e)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </GlassSurface>
      </div>
    </>
  );
};

export default PillNav;
