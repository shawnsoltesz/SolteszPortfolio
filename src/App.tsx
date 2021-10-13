import React from 'react'
import { Link } from 'react-router-dom'

import logo from './images/soltesz_logo.svg'

export function App() {
  return (
    <body>
      <header>
        <div className="nav">
          <ul className="nav-left">
            <li>
              <Link to="#">
                <img
                  src={logo}
                  alt="Shawn Soltesz logo"
                  width="200"
                  height="45"
                />
              </Link>
            </li>
          </ul>

          <ul className="nav-right">
            <li>
              <Link to="#">
                <i className="breadcrumb-icon fas fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="breadcrumb-icon fas fa-info-circle"></i>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="breadcrumb-icon fas fa-search"></i>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div>
          <h1>Hello and Welcome</h1>
        </div>
      </main>

      <footer>
        <div className="footer-left">
          <ul>
            <li>
              <a href="http://www.facebook.com/stpetepet">
                <i className="facebook fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a href="http://www.instagram.com/stpetepet">
                <i className="instagram fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-right">
          <p>
            Built with <i className="heart fa fa-heart"></i> in St Petersburg,
            Florida. <i className="paw fas fa-paw"></i>
          </p>
          <p>&#169;2021 StPete.pet - Privacy Policy - Terms of Service</p>
        </div>
      </footer>
    </body>
  )
}
