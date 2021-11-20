import React from 'react'
import headshot from '../images/shawn_soltesz_headshot.jpg'

export function Home() {
  return (
    <div id="home">
      <div className="home">
        <div className="home-header">
          <div className="home-body">
            <div className="home-body-left">
              <ul>
                <li>
                  <img
                    className="headshot"
                    src={headshot}
                    alt="Shawn Soltesz headshot"
                    width="250"
                  />
                </li>
              </ul>
            </div>

            <div className="home-body-right">
              <ul className="home-header">
                <li>
                  <h1>Shawn Soltesz</h1>
                </li>
                <li>
                  <h2>Web Development Professional</h2>
                </li>
              </ul>
              <ul className="home-list">
                <li>Agile Project Management</li>
                <li>Curious and Optimistic </li>
                <li>Entrepreneurial&nbsp;&nbsp;Spirit</li>
                <li>Team Collaborator</li>
                <li>User Centric ...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
