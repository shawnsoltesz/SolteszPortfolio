import React from 'react'
// import { Link } from 'react-router-dom'

import logo from './images/soltesz_logo.svg'
import headshot from './images/shawn_soltesz_headshot.jpg'

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
        <div className="home">
          <h2>Insert</h2>

          <div className="headshot">
            <img src={headshot} alt="Shawn Soltesz headshot" width="250" />
          </div>
        </div>
        <h2>About</h2>

        <div className="about">
          <div className="about-details">
            <h3>My name is Shawn Soltesz</h3>

            <h4>Curious, Entrepreneurial and Optimistic</h4>
            <p>
              After spending 15 years in various operational and implementation
              roles within Ed Tech, Shawn felt unsure of his exact career
              trajectory. Therefore after considering what excited him about his
              work experiences, all signs pointed to working with the products
              and the users. Therefore, he decided to take a pause and pursue
              the skills and knowledge that offered opportunities to be hands on
              with building and supporting the products created and offered to
              the end-user.
            </p>
            <p>
              Shawn is a multifaceted professional who is interested in pursuing
              a career in QA dev, technology solutions in the front end realm.
              He’s flexible, curious, analytical, and has a knack for ensuring
              results are in line with expected outcomes. He possesses
              experience with agile software development and the tools used to
              support this approach through the SDLC.
            </p>

            <h4>Technical Skills</h4>
            <ul>
              <li className="technical-skills">
                <strong>Languages:</strong> C#, SQL, HTML, CSS, Typescript
              </li>
              <li className="technical-skills">
                <strong>Data:</strong> PostGreSQL, REST APIs, JSON
              </li>
              <li className="technical-skills">
                <strong>DevOps:</strong> AWS, Confluence, Dropbox, GitHub
              </li>
              <li className="technical-skills">
                <strong>Frameworks:</strong> .NET, React with Hooks
              </li>
              <li className="technical-skills">
                <strong>Projects:</strong> Aha!, Azure ADO, Jira, Smartsheets
              </li>
              <li className="technical-skills">
                <strong>Software:</strong> MS Office, GSuite, Shopify{' '}
              </li>
            </ul>

            <ul className="technology-logos">
              <li>
                <i className="fab fa-react"></i>
              </li>
              <li>
                <i className="fab fa-html5"></i>
              </li>
              <li>
                <i className="fab fa-sass"></i>
              </li>
              <li>
                <i className="fab fa-js-square"></i>
              </li>
              <li>
                <i className="fab fa-aws"></i>
              </li>
              <li>
                <i className="fab fa-atlassian"></i>
              </li>
              <li>
                <i className="fab fa-dropbox"></i>
              </li>
              <li>
                <i className="fab fa-github-square"></i>
              </li>
              <li>
                <i className="fab fa-microsoft"></i>
              </li>
              <li>
                <i className="fab fa-apple"></i>
              </li>
              <li>
                <i className="fab fa-google-drive"></i>
              </li>
              <li>
                <i className="fab fa-drupal"></i>
              </li>
              <li>
                <i className="fab fa-css3-alt"></i>
              </li>
              <li>
                <i className="fab fa-npm"></i>
              </li>
              <li>
                <i className="fab fa-figma"></i>
              </li>
              <li>
                <i className="fas fa-database"></i>
              </li>
            </ul>

            <h4>Technical Community</h4>
            <ul>
              <li className="meetups">
                <a href="https://www.meetup.com/suncoast-developers-guild/">
                  Suncoast Developers Guild Open Code Meetup
                </a>
              </li>
              <li className="meetups">
                <a href="https://www.meetup.com/SEO-Training-Tampa/">
                  Tampa SEO &amp; Internet Marketing Meetup
                </a>
              </li>
              <li className="meetups">
                <a href="https://www.meetup.com/Women-Who-Code-Tampa/">
                  Women Who Code Tampa Meetup
                </a>
              </li>
              <li className="meetups">
                <a href="https://www.meetup.com/St-Pete-NET-Meetup/">
                  St. Pete.NET Meetup
                </a>
              </li>
              <li className="meetups">
                <a href="https://www.meetup.com/Tech4Good-Tampa/">
                  Tech4Good Tampa Meetup
                </a>
              </li>
              <li className="meetups">
                <a href="https://www.meetup.com/BaltimoreTechiesforGood/">
                  Baltimore Techies for Good / TechSoup Group
                </a>
              </li>
              <li className="meetups">
                <a href="https://www.meetup.com/Tampa-Bay-PostgreSQL-Users-Group/">
                  Tampa Bay PostgreSQL Users Group Meetup
                </a>
              </li>
            </ul>

            <h4>Community Service</h4>
            <ul>
              <li className="meetups">
                <em>St. Pete ReCANvers - Reclaim. Reincarnate. ReCANver</em>:
                This is a personal project created to collect aluminum cans from
                the community and recycle them for money to be donated to local
                St Petersburg, FL non-profit &nbsp;
                <a href="https://www.purposethroughpassion.com/">
                  Purpose Through Passion
                </a>
                .
              </li>
              <li className="meetups">
                <em>Technical Solutions/Web Development Day</em> to
                benefit&nbsp;
                <a href="https://www.meetup.com/BaltimoreTechiesforGood/">
                  Baltimore Techies for Good / TechSoup Group
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h2>Portfolio</h2>
        <div className="portfolio">
          <h3>StPete.pet</h3>
          <p>
            StPete.pet celebrates the inclusiveness our city possesses through
            capturing the various pet oriented, or pet friendly businesses and
            points of interest within St Petersburg, FL. Not only does it
            provide an interactive map highlighting the location of these
            featured places, but it also provides descriptive information and
            links to their website for the user to explore further. This
            capstone project will be released to the public and updated based on
            the current roadmap and user feedback.
          </p>
        </div>
        <h2>Contact</h2>
        <div>
          <ul className="contact">
            <li>
              <i className="fab fa-github-square"></i>
            </li>
            <li>
              <i className="fab fa-linkedin"></i>
            </li>
            <li>
              <i className="fas fa-envelope"></i>
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>
            </li>
          </ul>
        </div>
      </main>
      <footer>
        <div className="footer">
          <p>
            Built with <i className="heart fa fa-heart"></i> in St Petersburg,
            Florida &nbsp;©2021
          </p>
        </div>
      </footer>
    </div>
  )
}
