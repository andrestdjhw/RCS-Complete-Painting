import React, { useState } from "react"
import emailjs from "@emailjs/browser"

// ─────────────────────────────────────────────────────────────────────────────
// Config — rellenar con los IDs de EmailJS
// ─────────────────────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID"
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY"

// ─────────────────────────────────────────────────────────────────────────────
// Brand tokens
// ─────────────────────────────────────────────────────────────────────────────
const B = {
  red:      "#CC0000",
  redDark:  "#A80000",
  redLight: "#fff0f0",
  ink:      "#1A1A1A",
  bg:       "#FFFFFF",
  bg2:      "#F6F6F4",
  border:   "rgba(0,0,0,0.10)",
  muted:    "rgba(0,0,0,0.45)",
}

// ─────────────────────────────────────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────────────────────────────────────

const inputStyle = (error) => ({
  width: "100%",
  padding: "10px 14px",
  fontSize: "14px",
  fontFamily: "'DM Sans', sans-serif",
  color: B.ink,
  background: B.bg2,
  border: `1.5px solid ${error ? B.red : B.border}`,
  borderRadius: "8px",
  outline: "none",
  transition: "border-color .15s, box-shadow .15s",
})

const labelStyle = {
  display: "block",
  fontSize: "11px",
  fontWeight: 700,
  letterSpacing: ".06em",
  textTransform: "uppercase",
  color: B.muted,
  marginBottom: "5px",
}

// ─────────────────────────────────────────────────────────────────────────────
// Form Component
// ─────────────────────────────────────────────────────────────────────────────

function HeroBidForm() {
  const [form, setForm] = useState({
    project_address: "",
    project_type:    "",
    unit_count:      "",
    scope:           [],
    role:            "",
    company:         "",
    name:            "",
    email:           "",
    phone:           "",
  })

  const [errors,   setErrors]   = useState({})
  const [status,   setStatus]   = useState("idle") // idle | sending | success | error
  const [focusedField, setFocusedField] = useState(null)

  // ── Handlers ──────────────────────────────────────────────────────────────

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }))
  }

  const handleScope = (value) => {
    setForm(prev => ({
      ...prev,
      scope: prev.scope.includes(value)
        ? prev.scope.filter(s => s !== value)
        : [...prev.scope, value],
    }))
  }

  const validate = () => {
    const e = {}
    if (!form.project_address.trim()) e.project_address = "Required"
    if (!form.project_type)           e.project_type    = "Required"
    if (!form.unit_count)             e.unit_count      = "Required"
    if (form.scope.length === 0)      e.scope           = "Select at least one"
    if (!form.role)                   e.role            = "Required"
    if (!form.company.trim())         e.company         = "Required"
    if (!form.name.trim())            e.name            = "Required"
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required"
    return e
  }

  const handleSubmit = async () => {
    const e = validate()
    if (Object.keys(e).length > 0) { setErrors(e); return }

    setStatus("sending")

    const templateParams = {
      project_address: form.project_address,
      project_type:    form.project_type,
      unit_count:      form.unit_count,
      scope:           form.scope.join(", "),
      role:            form.role,
      company:         form.company,
      name:            form.name,
      email:           form.email,
      phone:           form.phone || "—",
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  // ── Focus helpers ──────────────────────────────────────────────────────────
  const focusStyle = (name) => ({
    ...inputStyle(errors[name]),
    ...(focusedField === name && {
      borderColor: B.red,
      boxShadow: `0 0 0 3px rgba(204,0,0,0.10)`,
      background: "#fff",
    }),
  })

  // ── Success state ──────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div style={{
        background: B.bg,
        borderRadius: "16px",
        padding: "40px 32px",
        boxShadow: "0 24px 60px rgba(0,0,0,0.10)",
        textAlign: "center",
      }}>
        <div style={{
          width: "56px", height: "56px", borderRadius: "50%",
          background: B.redLight, border: `2px solid ${B.red}`,
          display: "flex", alignItems: "center", justifyContent: "center",
          margin: "0 auto 16px",
        }}>
          <svg width="24" height="24" fill="none" stroke={B.red} strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 900, color: B.ink, marginBottom: "8px" }}>
          Project received.
        </h3>
        <p style={{ fontSize: "14px", color: B.muted, lineHeight: 1.7, maxWidth: "320px", margin: "0 auto 20px" }}>
          The owner will review your scope personally and respond within one business day.
        </p>
        <p style={{ fontSize: "13px", color: B.muted }}>
          For active bids with tight timelines, call us directly:
        </p>
        <a href="tel:+15125513050"
          style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 900, color: B.red, textDecoration: "none" }}>
          512-551-3050
        </a>
      </div>
    )
  }

  // ── Form ───────────────────────────────────────────────────────────────────
  return (
    <div style={{
      background: B.bg,
      borderRadius: "16px",
      padding: "32px 28px",
      boxShadow: "0 24px 60px rgba(0,0,0,0.10), 0 4px 16px rgba(0,0,0,0.06)",
      fontFamily: "'DM Sans', sans-serif",
    }}>

      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <p style={{ fontSize: "10px", fontWeight: 800, letterSpacing: ".2em", textTransform: "uppercase", color: B.red, marginBottom: "6px" }}>
          Request a Project Bid
        </p>
        <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 900, color: B.ink, lineHeight: 1.1, marginBottom: "4px" }}>
          Tell us about your project.
        </h2>
        <p style={{ fontSize: "13px", color: B.muted }}>
          We respond within one business day.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>

        {/* Project address */}
        <div>
          <label style={labelStyle}>Project name or address *</label>
          <input
            name="project_address"
            placeholder="123 Main St, Austin TX or Project Name"
            value={form.project_address}
            onChange={handleChange}
            onFocus={() => setFocusedField("project_address")}
            onBlur={() => setFocusedField(null)}
            style={focusStyle("project_address")}
          />
          {errors.project_address && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.project_address}</p>}
        </div>

        {/* Row: Project type + Unit count */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label style={labelStyle}>Project type *</label>
            <select
              name="project_type"
              value={form.project_type}
              onChange={handleChange}
              onFocus={() => setFocusedField("project_type")}
              onBlur={() => setFocusedField(null)}
              style={{ ...focusStyle("project_type"), cursor: "pointer" }}
            >
              <option value="">Select…</option>
              <option value="Garden-style">Garden-style</option>
              <option value="Mid-rise">Mid-rise</option>
              <option value="Senior housing">Senior housing</option>
              <option value="Townhomes">Townhomes</option>
              <option value="Mixed-use">Mixed-use</option>
              <option value="Other">Other</option>
            </select>
            {errors.project_type && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.project_type}</p>}
          </div>
          <div>
            <label style={labelStyle}>Unit count *</label>
            <input
              name="unit_count"
              type="number"
              placeholder="e.g. 240"
              value={form.unit_count}
              onChange={handleChange}
              onFocus={() => setFocusedField("unit_count")}
              onBlur={() => setFocusedField(null)}
              style={focusStyle("unit_count")}
            />
            {errors.unit_count && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.unit_count}</p>}
          </div>
        </div>

        {/* Scope checkboxes */}
        <div>
          <label style={labelStyle}>Scope needed *</label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {["Interior", "Exterior", "Specialty coatings", "Color consulting"].map((s) => {
              const active = form.scope.includes(s)
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleScope(s)}
                  style={{
                    padding: "6px 14px",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: "'DM Sans', sans-serif",
                    border: `1.5px solid ${active ? B.red : B.border}`,
                    borderRadius: "50px",
                    background: active ? B.redLight : "#fff",
                    color: active ? B.red : B.muted,
                    cursor: "pointer",
                    transition: "all .15s",
                  }}
                >
                  {s}
                </button>
              )
            })}
          </div>
          {errors.scope && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.scope}</p>}
        </div>

        {/* Row: Role + Company */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label style={labelStyle}>Your role *</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              onFocus={() => setFocusedField("role")}
              onBlur={() => setFocusedField(null)}
              style={{ ...focusStyle("role"), cursor: "pointer" }}
            >
              <option value="">Select…</option>
              <option value="GC">General Contractor</option>
              <option value="Developer">Developer</option>
              <option value="PM">Project Manager</option>
              <option value="Owner">Owner</option>
              <option value="Architect">Architect</option>
              <option value="Other">Other</option>
            </select>
            {errors.role && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.role}</p>}
          </div>
          <div>
            <label style={labelStyle}>Company *</label>
            <input
              name="company"
              placeholder="Company name"
              value={form.company}
              onChange={handleChange}
              onFocus={() => setFocusedField("company")}
              onBlur={() => setFocusedField(null)}
              style={focusStyle("company")}
            />
            {errors.company && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.company}</p>}
          </div>
        </div>

        {/* Name */}
        <div>
          <label style={labelStyle}>Your name *</label>
          <input
            name="name"
            placeholder="Full name"
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            style={focusStyle("name")}
          />
          {errors.name && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.name}</p>}
        </div>

        {/* Row: Email + Phone */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
          <div>
            <label style={labelStyle}>Email *</label>
            <input
              name="email"
              type="email"
              placeholder="you@company.com"
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              style={focusStyle("email")}
            />
            {errors.email && <p style={{ fontSize: "11px", color: B.red, marginTop: "4px" }}>{errors.email}</p>}
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input
              name="phone"
              type="tel"
              placeholder="(512) 000-0000"
              value={form.phone}
              onChange={handleChange}
              onFocus={() => setFocusedField("phone")}
              onBlur={() => setFocusedField(null)}
              style={focusStyle("phone")}
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === "sending"}
          style={{
            width: "100%",
            padding: "14px",
            background: status === "sending" ? "#999" : B.red,
            color: "#fff",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: ".08em",
            textTransform: "uppercase",
            border: "none",
            borderRadius: "50px",
            cursor: status === "sending" ? "not-allowed" : "pointer",
            transition: "background .15s, transform .1s",
            boxShadow: `0 4px 20px rgba(204,0,0,0.25)`,
            marginTop: "4px",
          }}
          onMouseEnter={e => { if (status !== "sending") e.currentTarget.style.background = B.redDark }}
          onMouseLeave={e => { if (status !== "sending") e.currentTarget.style.background = B.red }}
          onMouseDown={e => { e.currentTarget.style.transform = "scale(.98)" }}
          onMouseUp={e => { e.currentTarget.style.transform = "scale(1)" }}
        >
          {status === "sending" ? "Sending…" : "Submit project bid →"}
        </button>

        {status === "error" && (
          <p style={{ fontSize: "12px", color: B.red, textAlign: "center" }}>
            Something went wrong. Call us directly: <a href="tel:+15125513050" style={{ color: B.red }}>512-551-3050</a>
          </p>
        )}

        <p style={{ fontSize: "11px", color: B.muted, textAlign: "center", lineHeight: 1.5 }}>
          Your information is only used to respond to your bid request.
        </p>

      </div>
    </div>
  )
}

export default HeroBidForm