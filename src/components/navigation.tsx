import React, { useEffect, useState } from 'react'
import logo from '../images/shawnsoltesz_sm_logo.png'

export function Navigation() {
  const [toggleNav, setToggleNav] = useState(false)

  const [checkWidth, setCheckWidth] = useState(window.innerWidth)

  const checkFunc = () => {
    setCheckWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', checkFunc)

    return () => {
      window.removeEventListener('resize', checkFunc)
    }
  }, [])

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <header>
      <>
        <div className="nav-bar">
          <ul className="nav-left">
            <li>
              <a href="#home">
                <img src={logo} alt="Shawn Soltesz logo" width="200" />
              </a>
            </li>
          </ul>

          {/* Hamburger Menu */}

          {checkWidth < 900 && (
            <button onClick={toggleNavFunc} className="floating-btn">
              <i className="bars fas fa-bars"></i>
            </button>
          )}

          <div className="hamburger-menu">
            <div className={toggleNav ? 'active' : 'inactive'}>
              {checkWidth < 900 && (
                <button onClick={toggleNavFunc} className="close-curtain">
                  X
                </button>
              )}
            </div>
            <ul className="first">
              <li
                className={
                  toggleNav ? 'hamburger-active' : 'hamburger-inactive'
                }
              >
                {checkWidth < 900 && (
                  <a
                    onClick={toggleNavFunc}
                    className="hamburger-link"
                    href="#home"
                  >
                    <i className="nav-icon fas fa-home"></i>&nbsp;Home
                  </a>
                )}
              </li>

              <li
                className={
                  toggleNav ? 'hamburger-active' : 'hamburger-inactive'
                }
              >
                {checkWidth < 900 && (
                  <a
                    onClick={toggleNavFunc}
                    className="hamburger-link"
                    href="#about"
                  >
                    <i className="nav-icon fas fa-info-circle"></i>&nbsp;About
                  </a>
                )}
              </li>
              <li
                className={
                  toggleNav ? 'hamburger-active' : 'hamburger-inactive'
                }
              >
                {checkWidth < 900 && (
                  <a
                    onClick={toggleNavFunc}
                    className="hamburger-link"
                    href="#portfolio"
                  >
                    <i className="nav-icon fas fa-briefcase"></i>&nbsp;Portfolio
                  </a>
                )}
              </li>
              <li
                className={
                  toggleNav ? 'hamburger-active' : 'hamburger-inactive'
                }
              >
                {checkWidth < 900 && (
                  <a
                    onClick={toggleNavFunc}
                    className="hamburger-link"
                    href="#contact"
                  >
                    <i className="nav-icon fas fa-mail-bulk"></i>&nbsp;Contact
                  </a>
                )}
              </li>
            </ul>
          </div>

          {/* Full Screen Menu */}

          <div className="full-screen-nav">
            {checkWidth > 900 && (
              <ul className="nav-right">
                <li className="nav-menu">
                  <a href="#home">
                    <i className="nav-icon nav-text capstone-phases fas fa-home"></i>
                    &nbsp;Home
                  </a>
                </li>
                <li className="nav-menu">
                  <a href="#about">
                    <i className="nav-icon nav-text fas fa-info-circle"></i>
                    &nbsp;About
                  </a>
                </li>
                <li className="nav-menu">
                  <a href="#portfolio">
                    <i className="nav-icon nav-text fas fa-briefcase"></i>
                    &nbsp;Portfolio
                  </a>
                </li>
                <li className="nav-menu">
                  <a href="#contact">
                    <i className="nav-icon nav-text fas fa-mail-bulk"></i>
                    &nbsp;Contact
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </>
    </header>
  )
}
