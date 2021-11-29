/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
export function Contact() {
  return (
    <div id="contact">
      <div className="contact">
        <h1 className="section-header">Contact</h1>
        <ul>
          <li>
            <a href="tel:410-802-6550">
              <i className="phone fas fa-phone-alt"></i>
            </a>
          </li>
          <li>
            <a href="mailto:shawnjsoltesz@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/shawnsoltesz" target="_blank">
              <i className="github fab fa-github-square"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shawn-soltesz/"
              target="_blank"
            >
              <i className="linkedin fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
