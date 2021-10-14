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
              <i className="nav-icon fas fa-home"></i>&nbsp;Home
            </li>
            <li>
              <i className="nav-icon fas fa-info-circle"></i>&nbsp;About
            </li>
            <li>
              <i className="nav-icon fas fa-briefcase"></i>&nbsp;Portfolio
            </li>
            <li>
              <i className="nav-icon fas fa-mail-bulk"></i>&nbsp;Contact
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div className="home">
          <div className="home-header">
            <h1>Shawn Soltesz</h1>
            <h2>Full Stack Web Developer</h2>
          </div>
          <div className="headshot">
            <img src={headshot} alt="Shawn Soltesz headshot" width="250" />
          </div>

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
        </div>

        <div className="about">
          <div className="about-details">
            <h2>About</h2>
            <h3>Summary</h3>
            {/* <p>Curious, Entrepreneurial and Optimistic</p> */}
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

            {/* <h3>Technical</h3> */}
            <span className="technical">
              <ul className="skills">
                <li>
                  <h3>Technical Skills</h3>
                </li>
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
                  <strong>Software:</strong> MS Office, GSuite, Shopify
                </li>
                <li className="technical-skills">
                  <strong>REST API:</strong> Mapbox, Cloudinary
                </li>
              </ul>

              <ul className="community">
                <li>
                  <h3>Technical Community</h3>
                </li>
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
            </span>

            <h3>Experience</h3>
            <h4 className="experience">
              Full Stack Web Development
              Student&nbsp;&nbsp;&#124;&nbsp;&nbsp;Suncoast Developers Guild
              &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2021
            </h4>

            <h4 className="experience">
              Senior Asset Management Analyst &nbsp;&nbsp;&#124;&nbsp;&nbsp;
              Pearson &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2020 - 2021
            </h4>

            <h4 className="experience">
              Course Iteration Manager &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2U
              &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2018 - 2020
            </h4>

            <h4 className="experience">
              Course Implementation Specialist &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2U
              &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2016 - 2018
            </h4>

            <h4 className="experience">
              Founder and Proprietor &nbsp;&nbsp;&#124;&nbsp;&nbsp; Your Pet at
              Home &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2014 - 2016
            </h4>

            <h4 className="experience">
              Senior Manager of Curriculum Resources
              &nbsp;&nbsp;&#124;&nbsp;&nbsp; Pearson
              &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2010 - 2014
            </h4>

            <h4 className="experience">
              E-Commerce Manager &nbsp;&nbsp;&#124;&nbsp;&nbsp; Smarterville,
              Inc &nbsp;&nbsp;&#124;&nbsp;&nbsp; 2006 - 2010
            </h4>

            <h3>Community Service</h3>
            <ul>
              <li className="meetups">
                <em>St. Pete ReCANvers - Reclaim. Reincarnate. ReCANver</em>:
                This is a personal project created to collect aluminum cans from
                the community and recycle them for money to be donated to local
                St Petersburg, FL non-profit &nbsp;
                <a href="https://www.purposethroughpassion.com/">
                  Purpose Through Passion
                </a>
                . In 9 months, 300 pounds of cans have been recycled and $75
                donated to benefit their clients.
              </li>
              <li className="meetups">
                <em>Technical Solutions/Web Development Day</em> to
                benefit&nbsp;
                <a href="https://www.meetup.com/BaltimoreTechiesforGood/">
                  Baltimore Techies for Good / TechSoup Group
                </a>
              </li>
            </ul>

            <button className="button" type="submit">
              <i className=" fas fa-download"></i>
              &nbsp;Download Resume
            </button>
          </div>
        </div>

        <div className="portfolio">
          <h2>Portfolio</h2>
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
        <div className="contact">
          <ul>
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
              <i className="phone fas fa-phone-alt"></i>
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
