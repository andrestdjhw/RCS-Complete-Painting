import React from "react"
import ReactDOM from "react-dom/client"

import Navbar      from "./scripts/Navbar"
import Footer      from "./scripts/Footer"
import HeroBidForm from "./scripts/HeroBidForm"
import RCSChatbot  from "./scripts/RCSChatbot"

// ── Navbar ──────────────────────────────────────────────────────────────────
if (document.querySelector("#render-navbar-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-navbar-here"))
  root.render(<Navbar logoUrl={window.rcsTheme?.logoUrl} />)
}

// ── Footer ──────────────────────────────────────────────────────────────────
if (document.querySelector("#render-footer-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-footer-here"))
  root.render(<Footer logoUrl={window.rcsTheme?.logoUrl} />)
}

// ── Hero Bid Form ────────────────────────────────────────────────────────────
if (document.querySelector("#render-hero-form-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-hero-form-here"))
  root.render(<HeroBidForm />)
}

// ── Chatbot (global — disponible en todas las páginas) ───────────────────────
if (document.querySelector("#render-chatbot-here")) {
  const root = ReactDOM.createRoot(document.querySelector("#render-chatbot-here"))
  root.render(<RCSChatbot />)
}