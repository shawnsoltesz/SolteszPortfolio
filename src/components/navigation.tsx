import React, { useEffect, useState } from 'react'
import logo from '../images/shawnsoltesz_sm_logo.png'

export function Navigation() {
  const [toggleNav, setToggleNav] = useState(false)

  const [checkWidth, setCheckWidth] = useState(window.innerWidth)

  const checkFunc = () => {
    console.log(checkWidth)
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
        <div className="nav">
          <ul className="nav-left">
            <li>
              <a href="#home">
                <img src={logo} alt="Shawn Soltesz logo" width="200" />
              </a>
            </li>
          </ul>
          {checkWidth < 900 && (
            <button onClick={toggleNavFunc} className="floating-btn">
              <i className="fas fa-bars"></i>
            </button>
          )}

          <nav className={toggleNav ? 'active' : ''}>
            {checkWidth < 900 && (
              <button onClick={toggleNavFunc} className="close-curtain">
                X
              </button>
            )}

            <a href="#home">
              <i className="nav-icon fas fa-home"></i>&nbsp;Home
            </a>
            <a href="#about">
              <i className="nav-icon fas fa-info-circle"></i>&nbsp;About
            </a>
            <a href="#portfolio">
              <i className="nav-icon fas fa-briefcase"></i>&nbsp;Portfolio
            </a>
            <a href="#contact">
              <i className="nav-icon fas fa-mail-bulk"></i>&nbsp;Contact
            </a>
          </nav>

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
      </>
    </header>
  )
}
