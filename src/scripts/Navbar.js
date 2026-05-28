import React, { useState, useEffect, useRef } from "react"

// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens — ajustar aquí si cambian los colores
// ─────────────────────────────────────────────────────────────────────────────
const BRAND = {
  red:        "#CC0000",
  redDark:    "#A80000",
  redLight:   "#fff0f0",
  charcoal:   "#2B2B2B",
  dark:       "#1A1A1A",
}

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────

const IconEmail = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const IconPhone = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
  </svg>
)

const IconFacebook = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const IconInstagram = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const IconGoogle = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const IconChevronDown = ({ className = "" }) => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.25" viewBox="0 0 24 24" className={className} aria-hidden="true">
    <polyline points="6,9 12,15 18,9" />
  </svg>
)

const IconMenu = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)

const IconX = () => (
  <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// Nav structure
// ─────────────────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Interior Painting",
        href: "/services/multifamily-interior-painting",
        desc: "New unit production at scale — prep, prime, finish and punch on schedules GCs can plan around.",
        icon: (
          <svg width="18" height="18" fill="none" stroke="#CC0000" strokeWidth="1.75" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
          </svg>
        ),
      },
      {
        label: "Exterior Painting",
        href: "/services/multifamily-exterior-painting",
        desc: "Weather-resistant systems for stucco, fiber cement and architectural metals. Boom lift certified.",
        icon: (
          <svg width="18" height="18" fill="none" stroke="#CC0000" strokeWidth="1.75" viewBox="0 0 24 24">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        ),
      },
      {
        label: "Specialty Coatings",
        href: "/services/specialty-coatings",
        desc: "Electrostatic painting for metals and color consulting for developers selecting palettes.",
        icon: (
          <svg width="18" height="18" fill="none" stroke="#CC0000" strokeWidth="1.75" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
          </svg>
        ),
      },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
    isCta: true,
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Navbar Component
//
// Props:
//   logoUrl  — URL del logo. En WordPress, pasar via wp_localize_script:
//              wp_localize_script('ourmainjs', 'rcsTheme', [
//                'logoUrl' => get_theme_file_uri('/assets/images/logo.png'),
//              ]);
//              Y en index.js: <Navbar logoUrl={window.rcsTheme?.logoUrl} />
// ─────────────────────────────────────────────────────────────────────────────

function Navbar({ logoUrl }) {
  const [scrolled, setScrolled]                     = useState(false)
  const [activeDropdown, setActiveDropdown]         = useState(null)
  const [mobileOpen, setMobileOpen]                 = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [adminBarH, setAdminBarH]                   = useState(0)
  const navRef     = useRef(null)
  const closeTimer = useRef(null)

  // ── Detecta el admin bar de WordPress ──
  useEffect(() => {
    const checkAdminBar = () => {
      const bar = document.getElementById("wpadminbar")
      setAdminBarH(bar ? bar.offsetHeight : 0)
    }
    checkAdminBar()
    window.addEventListener("resize", checkAdminBar)
    return () => window.removeEventListener("resize", checkAdminBar)
  }, [])

  const openMenu  = (label) => {
    clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }
  const closeMenu = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  // ── Scroll detection ──
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── Clear timer on unmount ──
  useEffect(() => {
    return () => clearTimeout(closeTimer.current)
  }, [])

  // ── Close dropdown on outside click ──
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  // ── Close mobile menu on resize to desktop ──
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className="fixed inset-x-0 z-[9998]"
      style={{ top: `${adminBarH}px` }}
      ref={navRef}
    >

      {/* ── Topbar ────────────────────────────────────────────────────────── */}
      <div
        className={`
          text-slate-300 text-sm
          transition-all duration-300 ease-in-out overflow-hidden
          ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}
        `}
        style={{ background: BRAND.dark }}
      >
        <div className="max-w-7xl mx-auto px-6 h-11 flex items-center justify-between gap-4">

          {/* Left — Contact info */}
          <div className="flex items-center gap-5 shrink-0">
            <a
              href="mailto:marisa@rcscomplete.com"
              className="flex items-center gap-2 hover:text-white transition-colors duration-150"
            >
              <IconEmail />
              <span className="hidden sm:inline">marisa@rcscomplete.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            <span className="w-px h-4 bg-white/10 hidden sm:block" />
            <a
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:text-white transition-colors duration-150"
            >
              <IconPhone />
              <span>(555) 123-4567</span>
            </a>
          </div>

          {/* Center — Geotag */}
          <div className="absolute left-1/2 -translate-x-1/2 pointer-events-auto hidden md:block">
            <a
              href="https://www.google.com/maps/place/RCS+Complete+Painting+LLC/@30.2293081,-97.6841226,17z/data=!3m1!4b1!4m6!3m5!1s0x8644bb0df1290d77:0x4968a1633c456fd0!8m2!3d30.2293081!4d-97.6841226!16s%2Fg%2F11mhr_z2fw?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors duration-150"
            >
              <svg width="11" height="11" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="text-[10px] tracking-[0.18em] uppercase font-semibold select-none whitespace-nowrap">
                Professional Multi-Family Painters Across Texas
              </span>
            </a>
          </div>

          {/* Right — Social icons */}
          <div className="flex items-center gap-4 shrink-0">
            <a href="#" aria-label="Facebook"           className="hover:text-white transition-colors duration-150"><IconFacebook /></a>
            <a href="#" aria-label="Instagram"          className="hover:text-white transition-colors duration-150"><IconInstagram /></a>
            <a
              href="#"
              aria-label="Better Business Bureau"
              className="text-[9px] font-black tracking-widest border border-white/20 hover:border-white/60 hover:text-white px-1.5 py-0.5 rounded transition-colors duration-150 leading-none"
            >
              BBB
            </a>
            <a href="#" aria-label="Google My Business" className="hover:opacity-80 transition-opacity duration-150"><IconGoogle /></a>
          </div>
        </div>
      </div>

      {/* ── Main Navigation ───────────────────────────────────────────────── */}
      <nav
        className={`
          bg-white border-b border-slate-100
          transition-shadow duration-300
          ${scrolled ? "shadow-lg shadow-black/10" : ""}
        `}
      >
        <div className="max-w-7xl mx-auto px-6 h-[108px] flex items-center justify-between relative">

          {/* Logo — left */}
          <a href="/" className="flex items-center shrink-0 group" aria-label="RCS Complete Painting — Home">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt="RCS Complete Painting LLC"
                className="h-24 w-auto object-contain transition-opacity duration-150 group-hover:opacity-85"
              />
            ) : (
              /* Fallback si no hay logoUrl */
              <div className="flex items-center gap-2.5">
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ background: BRAND.red }}
                >
                  <span className="text-white font-black text-sm tracking-tight">RC</span>
                </div>
                <div className="leading-none">
                  <span className="block font-black text-[18px] tracking-tight" style={{ color: BRAND.charcoal }}>RCS</span>
                  <span className="block text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5" style={{ color: BRAND.red }}>
                    Complete Painting
                  </span>
                </div>
              </div>
            )}
          </a>

          {/* Desktop Nav Links — center (absolute) */}
          <ul className="hidden lg:flex items-center gap-0.5 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => {

              // CTA — se renderiza fuera del ul, no dentro del map
              if (item.isCta) return null

              // Mega Menu — Services
              if (item.children) {
                const isOpen = activeDropdown === item.label
                return (
                  <li key={item.label}
                    onMouseEnter={() => openMenu(item.label)}
                    onMouseLeave={closeMenu}
                  >
                    <button
                      onClick={() => isOpen ? setActiveDropdown(null) : openMenu(item.label)}
                      className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150"
                      style={{
                        color: isOpen ? BRAND.red : BRAND.charcoal,
                        background: isOpen ? BRAND.redLight : "transparent",
                      }}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <IconChevronDown
                        className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                  </li>
                )
              }

              // Regular nav link — skip CTA (se renderiza fuera del ul)
              if (item.isCta) return null

              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-150"
                    style={{ color: BRAND.charcoal }}
                    onMouseEnter={e => { e.currentTarget.style.color = BRAND.red; e.currentTarget.style.background = BRAND.redLight }}
                    onMouseLeave={e => { e.currentTarget.style.color = BRAND.charcoal; e.currentTarget.style.background = "transparent" }}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* ── Mega Menu Panel — sibling del ul, hijo directo del nav ── */}
          {(() => {
            const servicesItem = NAV_ITEMS.find(i => i.children)
            const isOpen = activeDropdown === servicesItem?.label
            if (!servicesItem) return null
            return (
              <div
                onMouseEnter={() => openMenu(servicesItem.label)}
                onMouseLeave={closeMenu}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  zIndex: 9999,
                  transition: "opacity .2s, transform .2s",
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? "translateY(0)" : "translateY(-4px)",
                  pointerEvents: isOpen ? "auto" : "none",
                }}
              >
                <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />
                <div style={{ background: "#ffffff", boxShadow: "0 20px 60px rgba(0,0,0,0.15)", borderTop: "3px solid #CC0000" }}>

                  {/* Main grid */}
                  <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "20px 32px" }}>
                    <div style={{ display: "flex", gap: "12px", alignItems: "stretch" }}>

                      {/* Service cards */}
                      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
                        {servicesItem.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            style={{ textDecoration: "none", display: "flex", flexDirection: "column", gap: "10px", padding: "14px", borderRadius: "10px", border: "1px solid rgba(0,0,0,0.07)", background: "#ffffff", transition: "all .15s" }}
                            onMouseEnter={e => { e.currentTarget.style.background = BRAND.redLight; e.currentTarget.style.borderColor = "rgba(204,0,0,0.25)" }}
                            onMouseLeave={e => { e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)" }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                              <div style={{ width: "34px", height: "34px", borderRadius: "8px", background: "rgba(204,0,0,0.08)", border: "1px solid rgba(204,0,0,0.18)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                                {child.icon}
                              </div>
                              <span style={{ fontSize: "13px", fontWeight: 800, color: BRAND.charcoal, fontFamily: "'Montserrat', sans-serif" }}>
                                {child.label}
                              </span>
                            </div>
                            <p style={{ fontSize: "12px", color: "rgba(0,0,0,0.48)", lineHeight: 1.55, margin: 0 }}>
                              {child.desc}
                            </p>
                            <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", color: BRAND.red, display: "flex", alignItems: "center", gap: "4px", marginTop: "auto" }}>
                              Learn more
                              <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="9,18 15,12 9,6"/></svg>
                            </span>
                          </a>
                        ))}
                      </div>

                      {/* Divider */}
                      <div style={{ width: "1px", background: "rgba(0,0,0,0.07)", flexShrink: 0 }} />

                      {/* CTA panel */}
                      <div style={{ width: "200px", flexShrink: 0, borderRadius: "10px", padding: "16px", background: `linear-gradient(135deg, ${BRAND.charcoal} 0%, #3a0000 55%, ${BRAND.red} 130%)`, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                        <div>
                          <p style={{ fontSize: "9px", fontWeight: 900, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: "6px" }}>Ready to bid?</p>
                          <p style={{ fontSize: "14px", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "8px", fontFamily: "'Montserrat', sans-serif" }}>
                            On-site walk<br />
                            <span style={{ color: "rgba(255,255,255,.6)" }}>within 72 hrs.</span>
                          </p>
                          <p style={{ fontSize: "11px", color: "rgba(255,255,255,.5)", lineHeight: 1.5 }}>
                            Line-item bid in 5 business days.
                          </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "14px" }}>
                          <a href="/contact-us"
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "8px", fontSize: "11px", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".06em", background: "#fff", color: BRAND.red, borderRadius: "7px", textDecoration: "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "#fff0f0"}
                            onMouseLeave={e => e.currentTarget.style.background = "#fff"}
                          >
                            Request a bid →
                          </a>
                          <a href={servicesItem.href}
                            style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "7px", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".06em", background: "rgba(255,255,255,.10)", color: "rgba(255,255,255,.75)", border: "1px solid rgba(255,255,255,.18)", borderRadius: "7px", textDecoration: "none" }}
                            onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,.18)"}
                            onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,.10)"}
                          >
                            All Services
                          </a>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Bottom strip */}
                  <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)", background: "#F6F6F4" }}>
                    <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "8px 32px", display: "flex", alignItems: "center", gap: "16px", overflowX: "auto" }}>
                      <span style={{ fontSize: "10px", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(0,0,0,0.28)", flexShrink: 0 }}>Serving:</span>
                      {["Austin, TX", "Houston, TX", "Dallas–Fort Worth", "San Antonio, TX", "Oklahoma", "Louisiana", "Arkansas", "New Mexico"].map(loc => (
                        <span key={loc} style={{ fontSize: "11px", fontWeight: 600, color: "rgba(0,0,0,0.40)", flexShrink: 0 }}>{loc}</span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )
          })()}

          {/* CTA — right (desktop) — con animación de hover */}
          <a
            href="/contact-us"
            className="group relative hidden lg:inline-flex items-center gap-2 overflow-hidden px-5 py-2.5 text-white text-sm font-bold rounded-lg shadow-sm shrink-0 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(168,0,0,0.35)] active:scale-95"
            style={{ background: BRAND.red }}
          >
            {/* Capa de rojo profundo que entra desde la izquierda */}
            <span
              aria-hidden="true"
              className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
              style={{ background: "linear-gradient(90deg, #A80000 0%, #7a0000 100%)" }}
            />
            {/* Brillo diagonal que barre el botón */}
            <span
              aria-hidden="true"
              className="absolute top-0 bottom-0 -left-full w-1/2 -skew-x-12 bg-white/20 blur-[2px] transition-all duration-500 ease-out group-hover:left-full"
            />
            <span className="relative z-10">Contact Us</span>
            <svg
              width="13" height="13" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              aria-hidden="true"
              className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors duration-150"
            style={{ color: BRAND.charcoal }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <IconX /> : <IconMenu />}
          </button>
        </div>

        {/* ── Mobile Menu ─────────────────────────────────────────────────── */}
        <div
          className={`
            lg:hidden border-t border-slate-100 overflow-hidden
            transition-all duration-300 ease-in-out
            ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="px-4 pt-3 pb-5 space-y-1">

            <a
              href="/about"
              className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150"
              style={{ color: BRAND.charcoal }}
              onMouseEnter={e => { e.currentTarget.style.color = BRAND.red; e.currentTarget.style.background = BRAND.redLight }}
              onMouseLeave={e => { e.currentTarget.style.color = BRAND.charcoal; e.currentTarget.style.background = "transparent" }}
            >
              About Us
            </a>

            {/* Mobile Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150"
                style={{ color: BRAND.charcoal }}
                aria-expanded={mobileServicesOpen}
              >
                Services
                <IconChevronDown
                  className={`transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`
                  overflow-hidden transition-all duration-200
                  ${mobileServicesOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}
                `}
              >
                <div className="pl-4 pb-1 space-y-0.5">
                  <a
                    href="/services"
                    className="flex px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-slate-400 rounded-lg transition-colors duration-150 hover:bg-slate-50"
                  >
                    All Services →
                  </a>
                  {NAV_ITEMS.find((i) => i.label === "Services").children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="flex flex-col px-4 py-2.5 rounded-lg transition-colors duration-150"
                      style={{ color: BRAND.charcoal }}
                      onMouseEnter={e => e.currentTarget.style.background = BRAND.redLight}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >
                      <span className="text-sm font-semibold">{child.label}</span>
                      <span className="text-xs text-slate-400 mt-0.5">{child.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="/locations"
              className="flex items-center px-4 py-3 text-sm font-semibold rounded-xl transition-colors duration-150"
              style={{ color: BRAND.charcoal }}
              onMouseEnter={e => { e.currentTarget.style.color = BRAND.red; e.currentTarget.style.background = BRAND.redLight }}
              onMouseLeave={e => { e.currentTarget.style.color = BRAND.charcoal; e.currentTarget.style.background = "transparent" }}
            >
              Locations
            </a>

            <div className="pt-2">
              {/* CTA mobile — misma animación de hover */}
              <a
                href="/contact"
                className="group relative flex items-center justify-center gap-2 w-full overflow-hidden py-3 text-white text-sm font-bold rounded-xl shadow-sm transition-all duration-300 ease-out hover:shadow-[0_8px_22px_rgba(168,0,0,0.35)] active:scale-95"
                style={{ background: BRAND.red }}
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"
                  style={{ background: "linear-gradient(90deg, #A80000 0%, #7a0000 100%)" }}
                />
                <span
                  aria-hidden="true"
                  className="absolute top-0 bottom-0 -left-full w-1/2 -skew-x-12 bg-white/20 blur-[2px] transition-all duration-500 ease-out group-hover:left-full"
                />
                <span className="relative z-10">Contact Us</span>
                <svg
                  width="13" height="13" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5"
                  aria-hidden="true"
                  className="relative z-10 transition-transform duration-300 ease-out group-hover:translate-x-1"
                >
                  <polyline points="9,18 15,12 9,6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar