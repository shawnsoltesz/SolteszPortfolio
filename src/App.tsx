/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import { Navigation } from './components/navigation'
import { Home } from './components/home'
import { About } from './components/about'
import { Portfolio } from './components/portfolio'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

export function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}
