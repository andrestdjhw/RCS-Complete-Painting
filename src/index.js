import React from "react"
import ReactDOM from "react-dom/client"

import Navbar      from "./scripts/Navbar"
import Footer      from "./scripts/Footer"
import HeroBidForm from "./scripts/HeroBidForm"
import RCSChatbot  from "./scripts/RCSChatbot"

function mountComponents() {

  const navbarEl = document.querySelector("#render-navbar-here")
  if (navbarEl) {
    ReactDOM.createRoot(navbarEl).render(
      <Navbar logoUrl={window.rcsTheme?.logoUrl} />
    )
  }

  const footerEl = document.querySelector("#render-footer-here")
  if (footerEl) {
    ReactDOM.createRoot(footerEl).render(
      <Footer logoUrl={window.rcsTheme?.logoUrl} />
    )
  }

  const heroFormEl = document.querySelector("#render-hero-form-here")
  if (heroFormEl) {
    ReactDOM.createRoot(heroFormEl).render(<HeroBidForm />)
  }

  const chatbotEl = document.querySelector("#render-chatbot-here")
  if (chatbotEl) {
    ReactDOM.createRoot(chatbotEl).render(<RCSChatbot />)
  }

}

// Espera a que el DOM esté listo antes de montar
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountComponents)
} else {
  mountComponents()
}