import React, { useEffect, useMemo, useRef, useState } from "react"

// ── Config ────────────────────────────────────────────────────
const PHONE_DISPLAY = "512-551-3050"
const PHONE_LINK    = "tel:+15125513050"
const EMAIL_DISPLAY = "marisa@rcscomplete.com"
const EMAIL_LINK    = "mailto:marisa@rcscomplete.com"
const CONTACT_LINK  = "/contact-us"
const SERVICES_LINK = "/services"
const ABOUT_LINK    = "/about-us"
const LOCATIONS_LINK= "/locations"

// ── Icons ─────────────────────────────────────────────────────

function BotIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9v2.5c0 .53-.21 1.04-.59 1.41L3 14.5h18l-1.41-1.59A2 2 0 0 1 19 11.5V9c0-3.87-3.13-7-7-7Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 17.5c.4 1.2 1.5 2 3 2s2.6-.8 3-2"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.25" cy="9.75" r="1" fill="currentColor" />
      <circle cx="14.75" cy="9.75" r="1" fill="currentColor" />
    </svg>
  )
}

function CloseIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6L18 18M18 6L6 18" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    </svg>
  )
}

function SendIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 3L10 14M21 3L14 21L10 14L3 10L21 3Z"
        stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 16.2V19a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h2.8a2 2 0 0 1 2 1.72l.38 2.66a2 2 0 0 1-.58 1.72l-1.2 1.2a16 16 0 0 0 5.4 5.4l1.2-1.2a2 2 0 0 1 1.72-.58l2.66.38A2 2 0 0 1 21 16.2Z"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14 5H19V10M10 14L19 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 14V18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H10"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PaintIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 3h12v4H3zM5 7v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V7"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 8c0-1.5 3-3 3-3s-1.5 2.5-1.5 3a1.5 1.5 0 0 1-3 0c0-.5-.5-1.5-.5-1.5"
        stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

// ── Bot logic ─────────────────────────────────────────────────

function msg(text, links = []) {
  return { id: Date.now() + Math.random(), text, sender: "bot", timestamp: new Date(), links }
}

function getBotResponse(rawInput) {
  const i = rawInput.toLowerCase()

  // Interior painting
  if (i.includes("interior") || i.includes("unit") || i.includes("drywall finish") || i.includes("smooth wall") || i.includes("mep")) {
    return msg(
      "RCS handles new unit interior production at scale — prep, prime, finish, and punch across the building on schedules our partners can plan around. We coordinate MEP clearances, document finish standards per unit, and manage fire-rated assemblies. Smooth-finish drywall only.",
      [{ label: "Interior Painting", href: "/services/multifamily-interior-painting" }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Exterior painting
  if (i.includes("exterior") || i.includes("stucco") || i.includes("fiber cement") || i.includes("facade") || i.includes("envelope") || i.includes("boom lift") || i.includes("mid-rise")) {
    return msg(
      "Our exterior painting crews are boom lift certified and specialize in weather-resistant systems built for Texas and South Central climates. We apply across stucco, fiber cement, trim, and architectural metals — with surface prep and repair included. Same-standard execution on mid-rise envelopes.",
      [{ label: "Exterior Painting", href: "/services/multifamily-exterior-painting" }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Specialty / electrostatic / color consulting
  if (i.includes("specialty") || i.includes("electrostatic") || i.includes("railing") || i.includes("metal") || i.includes("color consult") || i.includes("palette") || i.includes("epoxy") || i.includes("texture")) {
    return msg(
      "RCS provides electrostatic painting for railings, doors, frames, and industrial metal components. We also offer color consulting for developers selecting palettes for new properties — backed by premium commercial-grade product expertise and on-project specification support.",
      [{ label: "Specialty Coatings", href: "/services/specialty-coatings" }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Project types / scope
  if (i.includes("garden") || i.includes("mid-rise") || i.includes("senior") || i.includes("townhome") || i.includes("mixed-use") || i.includes("project type")) {
    return msg(
      "RCS specializes in multifamily new construction across the full range — garden-style, mid-rise, senior housing, townhomes, and mixed-use. There is no formal unit-count minimum. A 24-unit boutique mid-rise is a strong fit; so is an 800-unit garden-style community.",
      [{ label: "Services Overview", href: SERVICES_LINK }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Locations / markets / states
  if (i.includes("austin") || i.includes("houston") || i.includes("dallas") || i.includes("san antonio") || i.includes("dfw") || i.includes("oklahoma") || i.includes("louisiana") || i.includes("arkansas") || i.includes("new mexico") || i.includes("texas") || i.includes("state") || i.includes("market") || i.includes("location") || i.includes("area") || i.includes("region")) {
    return msg(
      "RCS maintains active operations across four Texas markets — Austin (HQ), Houston, Dallas-Fort Worth, and San Antonio — plus regional coverage in Oklahoma, Louisiana, Arkansas, and New Mexico. The same execution standard applies regardless of which market your project sits in.",
      [{ label: "Locations", href: LOCATIONS_LINK }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // RFP / bid / quote / timeline
  if (i.includes("rfp") || i.includes("bid") || i.includes("quote") || i.includes("estimate") || i.includes("proposal") || i.includes("scope review") || i.includes("how fast") || i.includes("response time") || i.includes("turnaround")) {
    return msg(
      "On-site walk within 72 hours of RFP receipt. Detailed bid with line-item scope, schedule, manpower plan, and material specifications delivered within five business days. Faster turnarounds available when the project requires it.",
      [{ label: "Request a Project Bid", href: CONTACT_LINK }]
    )
  }

  // Process / phases / how it works
  if (i.includes("process") || i.includes("phase") || i.includes("how do you") || i.includes("workflow") || i.includes("walkthrough") || i.includes("kickoff") || i.includes("turnover") || i.includes("punch") || i.includes("warranty")) {
    return msg(
      "RCS runs every project in five phases: Bid & Walkthrough (Days 1–7), Pre-Construction Alignment (Days 8–14), Mobilization, Owner-Supervised Production, and Turnover & Warranty. Two-year workmanship warranty standard. Extended terms available by project.",
      [{ label: "See Our Process", href: "/#how-we-run" }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Owner supervised / accountability
  if (i.includes("owner") || i.includes("supervisor") || i.includes("accountability") || i.includes("who runs") || i.includes("who manages") || i.includes("founder")) {
    return msg(
      "The founder is on-site walking every project — from bid walk to final punch. The same person who shook your hand at the walkthrough is the one walking your punch list. No project is handed off to an unsupervised foreman.",
      [{ label: "About RCS", href: ABOUT_LINK }]
    )
  }

  // Scale / capacity / simultaneous projects
  if (i.includes("scale") || i.includes("capacity") || i.includes("simultaneous") || i.includes("multiple project") || i.includes("how many") || i.includes("manpower") || i.includes("crew size")) {
    return msg(
      "RCS operates 20+ simultaneous active projects across the service area. 100+ painters mobilized at any given time. Mobilization, scheduling, and manpower allocation are proven systems — not improvised on each job.",
      [{ label: "Why Choose RCS", href: ABOUT_LINK }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // OSHA / insurance / certifications / credentials
  if (i.includes("osha") || i.includes("insur") || i.includes("coi") || i.includes("certified") || i.includes("licensed") || i.includes("duns") || i.includes("hub") || i.includes("mwbe") || i.includes("credential") || i.includes("safety")) {
    return msg(
      "Every field crew member is OSHA 10 certified minimum; all supervisors hold OSHA 30. Boom lift certified. Fully insured — general liability, workers' comp, and auto. COIs delivered within 24 hours of request. DUNS #082349795. Hispanic-owned, HUB Texas eligible, SAM.gov registered.",
      [{ label: "Credentials", href: "/#credentials" }, { label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Communication / updates / reporting
  if (i.includes("communicat") || i.includes("update") || i.includes("photo") || i.includes("report") || i.includes("daily") || i.includes("progress")) {
    return msg(
      "Daily progress reports during active production. Weekly photo documentation, manpower logs, and schedule variance reports sent to the project contact before you ask. Issues are escalated immediately — not held until they affect the schedule.",
      [{ label: "About RCS", href: ABOUT_LINK }]
    )
  }

  // GC vs developer / who works with
  if (i.includes("general contractor") || i.includes("gc") || i.includes("developer") || i.includes("owner") || i.includes("asset manager") || i.includes("direct contract") || i.includes("subcontract")) {
    return msg(
      "Both. Roughly half of RCS's work is as a painting subcontractor under a general contractor; the other half is direct contract with developers, owners, and asset managers. We adjust our communication and reporting structure to fit your project delivery model.",
      [{ label: "Request a Bid", href: CONTACT_LINK }]
    )
  }

  // Contact / call / email
  if (i.includes("contact") || i.includes("call") || i.includes("email") || i.includes("reach") || i.includes("phone") || i.includes("talk")) {
    return msg(
      "You can reach RCS directly by phone or through the contact form. All project inquiries receive a direct response within one business day — no auto-replies.",
      [{ label: PHONE_DISPLAY, href: PHONE_LINK }, { label: "Contact Us", href: CONTACT_LINK }]
    )
  }

  // Hispanic owned / HUB / MWBE
  if (i.includes("hispanic") || i.includes("minority") || i.includes("hub") || i.includes("mwbe") || i.includes("diversity") || i.includes("inclusion")) {
    return msg(
      "RCS Complete Painting is a Hispanic-owned business with DUNS #082349795. Eligible for HUB Texas certification and federal contracting through SAM.gov. Relevant for MWBE inclusion goals on public and institutional projects.",
      [{ label: "Credentials", href: "/#credentials" }, { label: "Contact Us", href: CONTACT_LINK }]
    )
  }

  // Default
  return msg(
    "I can help with interior painting, exterior painting, specialty coatings, our service markets across Texas and the South Central region, credentials, project process, or requesting a bid.",
    [{ label: "Request a Project Bid", href: CONTACT_LINK }, { label: "Call Us", href: PHONE_LINK }]
  )
}

// ── Component ─────────────────────────────────────────────────

function RCSChatbot() {
  const [isOpen,       setIsOpen]       = useState(false)
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping,     setIsTyping]     = useState(false)
  const [messages,     setMessages]     = useState([
    {
      id: 1,
      text: "Hi — I'm the RCS Complete Painting assistant. I can help with our services, markets across Texas and the South Central region, credentials, and requesting a project bid.",
      sender: "bot",
      timestamp: new Date(),
      links: [
        { label: "Request a Project Bid", href: CONTACT_LINK },
        { label: "Call Us",               href: PHONE_LINK   },
      ],
    },
  ])

  const endRef = useRef(null)

  const quickActions = useMemo(() => [
    { text: "Interior Painting",   icon: "🏢" },
    { text: "Exterior Painting",   icon: "🏗️" },
    { text: "Specialty Coatings",  icon: "⚡" },
    { text: "Texas Markets",       icon: "📍" },
    { text: "OSHA & Credentials",  icon: "🛡️" },
    { text: "Request a bid",       icon: "📋" },
  ], [])

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, isTyping])

  function handleSend(e) {
    e?.preventDefault?.()
    if (!inputMessage.trim()) return
    const text = inputMessage.trim()
    setMessages(prev => [...prev, { id: Date.now(), text, sender: "user", timestamp: new Date() }])
    setInputMessage("")
    setIsTyping(true)
    setTimeout(() => {
      setMessages(prev => [...prev, getBotResponse(text)])
      setIsTyping(false)
    }, 650)
  }

  // Brand colors
  const RED      = "#CC0000"
  const RED_DARK = "#A80000"
  const INK      = "#1A1A1A"
  const BG       = "#F6F6F4"
  const WHITE    = "#FFFFFF"

  return (
    <div className="fixed bottom-4 right-4 z-[9999] sm:bottom-5 sm:right-5">

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          className="mb-3 flex flex-col overflow-hidden"
          style={{
            width: "calc(100vw - 1.25rem)",
            maxWidth: "22rem",
            height: "33rem",
            borderRadius: "24px",
            boxShadow: "0 22px 60px rgba(0,0,0,0.16)",
            border: "1px solid rgba(0,0,0,0.09)",
            background: BG,
          }}
        >

          {/* ── Header ── */}
          <div
            className="relative overflow-hidden px-4 py-3 text-white"
            style={{
              background: `linear-gradient(135deg, ${INK} 0%, #3a0000 60%, ${RED} 130%)`,
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Diagonal paint texture */}
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: "linear-gradient(45deg, rgba(255,255,255,.5) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.5) 50%, rgba(255,255,255,.5) 75%, transparent 75%)",
              backgroundSize: "16px 16px",
              pointerEvents: "none",
            }} />

            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                {/* Bot avatar */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full flex-shrink-0"
                  style={{ background: "rgba(204,0,0,0.25)", border: "1px solid rgba(204,0,0,0.5)" }}>
                  <PaintIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,.55)" }}>
                    Schedule · Finish · Accountability
                  </p>
                  <h3 className="mt-0.5 text-[0.9rem] font-black tracking-[-0.01em]">
                    RCS Complete Painting
                  </h3>
                  <div className="mt-0.5 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#4ade80" }} />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "rgba(255,255,255,.6)" }}>
                      Online · responds in &lt;1 day
                    </p>
                  </div>
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition"
                style={{ background: "rgba(255,255,255,.1)", border: "1px solid rgba(255,255,255,.15)" }}
                onMouseEnter={e => { e.currentTarget.style.background = WHITE; e.currentTarget.style.color = INK }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,.1)"; e.currentTarget.style.color = WHITE }}
                aria-label="Close chat"
              >
                <CloseIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* ── Messages ── */}
          <div className="flex-1 overflow-y-auto px-3 py-3" style={{ background: BG }}>
            <div className="space-y-3">
              {messages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-[88%] px-3.5 py-2.5 text-[0.875rem] leading-6"
                    style={
                      message.sender === "user"
                        ? {
                            background: INK,
                            color: WHITE,
                            borderRadius: "18px 18px 4px 18px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                          }
                        : {
                            background: WHITE,
                            color: INK,
                            borderRadius: "18px 18px 18px 4px",
                            border: "1px solid rgba(0,0,0,0.08)",
                            boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                          }
                    }
                  >
                    <p style={{ margin: 0 }}>{message.text}</p>

                    {message.links?.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {message.links.map(link => (
                          <a
                            key={`${message.id}-${link.href}`}
                            href={link.href}
                            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[11px] font-bold transition"
                            style={{ background: BG, border: "1px solid rgba(0,0,0,0.10)", color: RED, textDecoration: "none" }}
                            onMouseEnter={e => { e.currentTarget.style.borderColor = RED; e.currentTarget.style.background = "#fff0f0" }}
                            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.10)"; e.currentTarget.style.background = BG }}
                          >
                            <LinkIcon className="h-3 w-3" />
                            <span>{link.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div
                    className="px-4 py-3"
                    style={{
                      background: WHITE,
                      border: "1px solid rgba(0,0,0,0.08)",
                      borderRadius: "18px 18px 18px 4px",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <div className="flex gap-1.5">
                      {[0, 200, 400].map((delay, idx) => (
                        <span
                          key={idx}
                          className="h-2 w-2 rounded-full animate-bounce"
                          style={{ background: idx === 0 ? INK : RED, animationDelay: `${delay}ms` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}

              <div ref={endRef} />
            </div>
          </div>

          {/* ── Quick actions (first message only) ── */}
          {messages.length === 1 && (
            <div
              className="border-t px-3 py-2.5"
              style={{ borderColor: "rgba(0,0,0,0.07)", background: WHITE }}
            >
              <p className="mb-2 text-[0.65rem] font-black uppercase tracking-[0.14em]" style={{ color: RED }}>
                Quick topics
              </p>
              <div className="flex flex-wrap gap-1.5">
                {quickActions.map(action => (
                  <button
                    key={action.text}
                    type="button"
                    onClick={() => setInputMessage(action.text)}
                    className="rounded-full px-2.5 py-1.5 text-[11px] font-bold transition"
                    style={{ background: BG, border: "1px solid rgba(0,0,0,0.09)", color: INK }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = RED; e.currentTarget.style.background = "#fff0f0"; e.currentTarget.style.color = RED }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)"; e.currentTarget.style.background = BG; e.currentTarget.style.color = INK }}
                  >
                    <span className="mr-1">{action.icon}</span>
                    {action.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Input ── */}
          <div
            className="border-t p-3"
            style={{ borderColor: "rgba(0,0,0,0.07)", background: WHITE }}
          >
            <form onSubmit={handleSend} className="flex items-center gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={e => setInputMessage(e.target.value)}
                placeholder="Ask about services, markets, bids…"
                className="min-w-0 flex-1 rounded-full px-4 py-2.5 text-sm outline-none transition"
                style={{
                  background: BG,
                  border: "1px solid rgba(0,0,0,0.09)",
                  color: INK,
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onFocus={e => { e.currentTarget.style.borderColor = RED; e.currentTarget.style.background = WHITE }}
                onBlur={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.09)"; e.currentTarget.style.background = BG }}
              />
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full text-white transition"
                style={{
                  background: `linear-gradient(135deg, ${RED_DARK}, ${RED})`,
                  boxShadow: "0 6px 18px rgba(204,0,0,0.30)",
                  opacity: inputMessage.trim() ? 1 : 0.5,
                }}
                onMouseEnter={e => { if (inputMessage.trim()) e.currentTarget.style.opacity = "0.85" }}
                onMouseLeave={e => { e.currentTarget.style.opacity = inputMessage.trim() ? "1" : "0.5" }}
                aria-label="Send message"
              >
                <SendIcon className="h-4 w-4" />
              </button>
            </form>

            {/* Footer links */}
            <div
              className="mt-2.5 flex flex-wrap items-center gap-3 text-[11px] font-semibold"
              style={{ color: "rgba(0,0,0,0.40)" }}
            >
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-1.5 transition"
                style={{ textDecoration: "none", color: "rgba(0,0,0,0.40)" }}
                onMouseEnter={e => e.currentTarget.style.color = RED}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(0,0,0,0.40)"}
              >
                <PhoneIcon className="h-3.5 w-3.5" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a
                href={EMAIL_LINK}
                className="truncate transition"
                style={{ textDecoration: "none", color: "rgba(0,0,0,0.40)" }}
                onMouseEnter={e => e.currentTarget.style.color = RED}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(0,0,0,0.40)"}
              >
                {EMAIL_DISPLAY}
              </a>
            </div>
          </div>

        </div>
      )}

      {/* ── FAB button ── */}
      <button
        type="button"
        onClick={() => setIsOpen(prev => !prev)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full text-white transition-all duration-300"
        style={{
          background: isOpen ? INK : `linear-gradient(135deg, ${INK} 0%, ${RED} 100%)`,
          boxShadow: "0 16px 40px rgba(204,0,0,0.30)",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.07)" }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)" }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {/* Ping dot */}
        {!isOpen && (
          <span className="absolute -right-0.5 -top-0.5 flex h-3.5 w-3.5">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"
              style={{ background: "#4ade80" }}
            />
            <span
              className="relative inline-flex h-3.5 w-3.5 rounded-full"
              style={{ background: "#4ade80" }}
            />
          </span>
        )}

        {isOpen
          ? <CloseIcon className="h-5 w-5" />
          : <BotIcon className="h-6 w-6" />
        }
      </button>

    </div>
  )
}

export default RCSChatbot