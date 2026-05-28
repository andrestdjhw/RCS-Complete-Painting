import React from "react"

// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens — light aesthetic (flyer-inspired)
// ─────────────────────────────────────────────────────────────────────────────
const BRAND = {
  red:       "#CC0000",
  redDark:   "#A80000",
  redLight:  "#fff0f0",
  ink:       "#1A1A1A",
  charcoal:  "#2B2B2B",
  bg:        "#F6F6F4",
  bg2:       "#FFFFFF",
  bg3:       "#F0EFED",
  bg4:       "#E8E7E5",
  border:    "rgba(0,0,0,0.09)",
  muted:     "rgba(0,0,0,0.50)",
  dim:       "rgba(0,0,0,0.30)",
}

// Gradiente gris oscuro → rojo apagado (coherente con §2 del home)
const RED_GRADIENT = "linear-gradient(135deg, #1A1A1A 0%, #2B2B2B 22%, #4a0000 52%, #8B0000 80%, #A80000 100%)"

// ─────────────────────────────────────────────────────────────────────────────
// SVG Icons
// ─────────────────────────────────────────────────────────────────────────────

const IconFacebook = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const IconInstagram = () => (
  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
)

const IconGoogle = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
)

const IconEmail = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </svg>
)

const IconPhone = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82 19.8 19.8 0 01.99 2.2 2 2 0 013 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
  </svg>
)

const IconPin = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const IconArrow = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
    <polyline points="9,18 15,12 9,6" />
  </svg>
)

// ─────────────────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────────────────

const SERVICES = [
  { label: "Interior Painting",  href: "/services/multifamily-interior-painting" },
  { label: "Exterior Painting",  href: "/services/multifamily-exterior-painting" },
  { label: "Specialty Coatings", href: "/services/specialty-coatings"            },
  { label: "All Services",       href: "/services"                               },
]

const QUICK_LINKS = [
  { label: "About Us",   href: "/about-us"   },
  { label: "Services",   href: "/services"   },
  { label: "Locations",  href: "/locations"  },
  { label: "Contact Us", href: "/contact-us" },
]

const TX_MARKETS = [
  { label: "Austin, TX — HQ",       href: "/locations/austin"         },
  { label: "Houston, TX",           href: "/locations/houston"        },
  { label: "Dallas–Fort Worth, TX", href: "/locations/dallas-fort-worth" },
  { label: "San Antonio, TX",       href: "/locations/san-antonio"    },
]

const REGIONAL_STATES = [
  "Oklahoma",
  "Louisiana",
  "Arkansas",
  "New Mexico",
]

// ─────────────────────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────────────────────

const ColHeading = ({ children }) => (
  <h3
    style={{
      fontFamily: "'Montserrat', sans-serif",
      fontSize: "11px",
      fontWeight: 900,
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: BRAND.ink,
      marginBottom: "18px",
      paddingLeft: "10px",
      borderLeft: `3px solid ${BRAND.red}`,
    }}
  >
    {children}
  </h3>
)

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="flex items-center gap-2 text-sm transition-colors duration-150 group"
    style={{ color: BRAND.muted, textDecoration: "none" }}
    onMouseEnter={e => e.currentTarget.style.color = BRAND.red}
    onMouseLeave={e => e.currentTarget.style.color = BRAND.muted}
  >
    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150" style={{ color: BRAND.red }}>
      <IconArrow />
    </span>
    {children}
  </a>
)

// ─────────────────────────────────────────────────────────────────────────────
// Footer Component
//
// Props:
//   logoUrl — window.rcsTheme?.logoUrl (via wp_localize_script)
// ─────────────────────────────────────────────────────────────────────────────

function Footer({ logoUrl }) {
  const year = new Date().getFullYear()

  return (
    <footer style={{ fontFamily: "'DM Sans', sans-serif", background: BRAND.bg }}>

      {/* ── CTA Banner — gradiente gris oscuro → rojo apagado (coherente con el home) ─ */}
      <div
        className="relative overflow-hidden py-12 px-6"
        style={{ background: RED_GRADIENT }}
      >
        {/* Círculo decorativo de fondo */}
        <div style={{
          position: "absolute", top: "-40%", right: "-8%",
          width: "55%", height: "200%",
          background: "rgba(255,255,255,0.05)", borderRadius: "50%",
          pointerEvents: "none",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p style={{ color: "#fff", fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 30px)", fontWeight: 900, letterSpacing: "-.01em", lineHeight: 1.1 }}>
              Your next multifamily project deserves<br className="hidden md:block" /> a painter who delivers.
            </p>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: "14px", marginTop: "6px" }}>
              Request a bid — we respond within one business day.
            </p>
          </div>
          <a
            href="/contact-us"
            className="shrink-0 transition-all duration-150 active:scale-95"
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              padding: "13px 28px",
              background: "#fff", color: BRAND.red,
              fontWeight: 800, fontSize: "13px",
              letterSpacing: ".06em", textTransform: "uppercase",
              textDecoration: "none", borderRadius: "50px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={e => { e.currentTarget.style.background = BRAND.bg4; e.currentTarget.style.color = BRAND.redDark }}
            onMouseLeave={e => { e.currentTarget.style.background = "#fff";    e.currentTarget.style.color = BRAND.red }}
          >
            Request a project bid →
          </a>
        </div>
      </div>

      {/* ── Main footer grid ───────────────────────────────────────────────── */}
      <div
        className="max-w-7xl mx-auto px-6 py-14"
        style={{ borderBottom: `1px solid ${BRAND.border}` }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <a href="/" aria-label="RCS Complete Painting — Home">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt="RCS Complete Painting LLC"
                  className="w-auto object-contain"
                  style={{ height: "120px" }}
                />
              ) : (
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 900, color: BRAND.ink, letterSpacing: "-.02em" }}>
                  RCS <span style={{ color: BRAND.red }}>Complete Painting</span>
                </div>
              )}
            </a>

            <p style={{ fontSize: "14px", color: BRAND.muted, lineHeight: 1.7 }}>
              Multifamily new construction painting specialist.<br />
              Texas + Oklahoma, Louisiana, Arkansas, New Mexico.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-2.5">
              <li>
                <a
                  href="mailto:marisa@rcscomplete.com"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-150"
                  style={{ color: BRAND.muted, textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = BRAND.red}
                  onMouseLeave={e => e.currentTarget.style.color = BRAND.muted}
                >
                  <span style={{ color: BRAND.red }}><IconEmail /></span>
                  marisa@rcscomplete.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+15125513050"
                  className="flex items-center gap-2.5 text-sm transition-colors duration-150"
                  style={{ color: BRAND.muted, textDecoration: "none" }}
                  onMouseEnter={e => e.currentTarget.style.color = BRAND.red}
                  onMouseLeave={e => e.currentTarget.style.color = BRAND.muted}
                >
                  <span style={{ color: BRAND.red }}><IconPhone /></span>
                  512-551-3050
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2.5 text-sm" style={{ color: BRAND.muted }}>
                  <span className="mt-0.5 shrink-0" style={{ color: BRAND.red }}><IconPin /></span>
                  Austin, TX (HQ) — Serving TX, OK, LA, AR, NM
                </span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {[
                { icon: <IconFacebook />, label: "Facebook",           href: "#" },
                { icon: <IconInstagram />, label: "Instagram",         href: "#" },
                { icon: <IconGoogle />,   label: "Google My Business", href: "#" },
              ].map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="transition-all duration-150"
                  style={{
                    width: "36px", height: "36px", borderRadius: "8px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: BRAND.muted,
                    background: BRAND.bg4,
                    border: `1px solid ${BRAND.border}`,
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = BRAND.red; e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = BRAND.red }}
                  onMouseLeave={e => { e.currentTarget.style.background = BRAND.bg4; e.currentTarget.style.color = BRAND.muted; e.currentTarget.style.borderColor = BRAND.border }}
                >
                  {icon}
                </a>
              ))}
              <a
                href="#"
                aria-label="Better Business Bureau"
                className="transition-all duration-150"
                style={{
                  width: "36px", height: "36px", borderRadius: "8px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "9px", fontWeight: 900, letterSpacing: ".1em",
                  color: BRAND.red,
                  background: BRAND.redLight,
                  border: `1px solid rgba(204,0,0,0.2)`,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = BRAND.red; e.currentTarget.style.color = "#fff" }}
                onMouseLeave={e => { e.currentTarget.style.background = BRAND.redLight; e.currentTarget.style.color = BRAND.red }}
              >
                BBB
              </a>
            </div>
          </div>

          {/* Col 2 — Services + Quick Links */}
          <div>
            <ColHeading>Services</ColHeading>
            <ul className="flex flex-col gap-2 mb-8">
              {SERVICES.map(({ label, href }) => (
                <li key={label}><FooterLink href={href}>{label}</FooterLink></li>
              ))}
            </ul>

            <ColHeading>Quick Links</ColHeading>
            <ul className="flex flex-col gap-2">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}><FooterLink href={href}>{label}</FooterLink></li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Locations */}
          <div>
            <ColHeading>Texas Markets</ColHeading>
            <ul className="flex flex-col gap-2 mb-8">
              {TX_MARKETS.map(({ label, href }) => (
                <li key={label}><FooterLink href={href}>{label}</FooterLink></li>
              ))}
            </ul>

            <ColHeading>Regional States</ColHeading>
            <ul className="flex flex-col gap-2">
              {REGIONAL_STATES.map((state) => (
                <li key={state}>
                  <span style={{ fontSize: "14px", color: BRAND.muted }}>{state}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Trust & Hours */}
          <div>
            <ColHeading>Trust & Credentials</ColHeading>

            <div className="flex flex-col gap-3 mb-7">
              {[
                { badge: "LIC", desc: "State licensed contractor"          },
                { badge: "INS", desc: "Fully insured — GL, WC & auto"      },
                { badge: "BBB", desc: "Better Business Bureau accredited"   },
                { badge: "5★",  desc: "Top rated on Google My Business"     },
              ].map(({ badge, desc }) => (
                <div key={badge} className="flex items-center gap-3">
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: "40px", height: "40px", borderRadius: "8px",
                      background: BRAND.redLight,
                      border: `1px solid rgba(204,0,0,0.2)`,
                      color: BRAND.red,
                      fontSize: "10px", fontWeight: 900, letterSpacing: ".08em",
                    }}
                  >
                    {badge}
                  </div>
                  <p style={{ fontSize: "12px", color: BRAND.muted, lineHeight: 1.4 }}>{desc}</p>
                </div>
              ))}
            </div>

            {/* Service hours */}
            <div
              className="rounded-xl p-4"
              style={{ background: BRAND.bg4, border: `1px solid ${BRAND.border}` }}
            >
              <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: ".18em", textTransform: "uppercase", color: BRAND.red, marginBottom: "10px" }}>
                Office Hours
              </p>
              {[
                { day: "Mon – Fri", hours: "7:00 AM – 6:00 PM" },
                { day: "Saturday",  hours: "8:00 AM – 4:00 PM" },
                { day: "Sunday",    hours: "Closed"             },
              ].map(({ day, hours }) => (
                <div key={day} className="flex justify-between text-xs py-1.5" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
                  <span style={{ color: BRAND.dim }}>{day}</span>
                  <span style={{ color: BRAND.charcoal, fontWeight: 700 }}>{hours}</span>
                </div>
              ))}
            </div>

            {/* DUNS */}
            <p style={{ fontSize: "11px", color: BRAND.dim, marginTop: "12px" }}>
              DUNS #082349795 · Hispanic-Owned Business
            </p>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ─────────────────────────────────────────────────────── */}
      <div style={{ background: BRAND.bg3 }}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontSize: "12px", color: BRAND.dim }}>
            © {year} RCS Complete Painting LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: "Privacy Policy",   href: "/privacy"     },
              { label: "Terms of Service", href: "/terms"       },
              { label: "Sitemap",          href: "/sitemap.xml" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                style={{ fontSize: "12px", color: BRAND.dim, textDecoration: "none", transition: "color .15s" }}
                onMouseEnter={e => e.currentTarget.style.color = BRAND.red}
                onMouseLeave={e => e.currentTarget.style.color = BRAND.dim}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer