import React from 'react'
// import { Link } from 'react-router-dom'

import logo from './images/soltesz_logo.svg'

export function App() {
  return (
    <div>
      <header>
        <div className="nav">
          <ul className="nav-left">
            <li>
              <img
                src={logo}
                alt="Shawn Soltesz logo"
                width="200"
                height="45"
              />
            </li>
          </ul>

          <ul className="nav-right">
            <li>
              <i className="breadcrumb-icon fas fa-home"></i>&nbsp;Home
            </li>
            <li>
              <i className="breadcrumb-icon fas fa-info-circle"></i>&nbsp;About
            </li>
            <li>
              <i className="fas fa-briefcase"></i>&nbsp;Portfolio
            </li>
            <li>
              <i className="fas fa-mail-bulk"></i>&nbsp;Contact
            </li>
          </ul>
        </div>
      </header>
      <main>
        <h1>Hello and Welcome</h1>

        <h2>About</h2>

        <h2>Portfolio</h2>

        <h2>Contact</h2>
      </main>
      <footer>
        <div className="footer">
          <p>
            Built with <i className="heart fa fa-heart"></i> in St Petersburg,
            Florida. <i className="paw fas fa-paw"></i>
            &nbsp;&#169;2021 Shawn Soltesz
          </p>
        </div>
      </footer>
    </div>
  )
}
