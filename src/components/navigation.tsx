import React from 'react'
import logo from '../images/shawnsoltesz_sm_logo.png'

export function Navigation() {
  return (
    <header>
      <div className="nav">
        <ul className="nav-left">
          <li>
            <a href="#home">
              <img src={logo} alt="Shawn Soltesz logo" width="200" />
            </a>
          </li>
        </ul>

        <ul className="nav-right">
          <li>
            <a href="#home">
              <i className="nav-icon fas fa-home"></i>
            </a>
            &nbsp;
            <a className="nav-text" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="nav-icon fas fa-info-circle"></i>
            </a>
            &nbsp;
            <a className="nav-text" href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <i className="nav-icon fas fa-briefcase"></i>
            </a>
            &nbsp;
            <a className="nav-text" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="nav-icon fas fa-mail-bulk"></i>
            </a>
            &nbsp;
            <a className="nav-text" href="#contact">
              &nbsp;Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
