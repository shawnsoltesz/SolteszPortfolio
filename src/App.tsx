/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
// import { Link } from 'react-router-dom'

import logo from './images/soltesz_logo.svg'
import headshot from './images/shawn_soltesz_headshot.jpg'
import stpetepet from './images/spp_screenshot.png'
import colorpicker from './images/color_picker_screenshot.png'
import roshambo from './images/roshambo_screenshot.png'

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
              <i className="nav-icon fas fa-home"></i>&nbsp;
              <a href="#home">Home</a>
            </li>
            <li>
              <i className="nav-icon fas fa-info-circle"></i>&nbsp;
              <a href="#about">About</a>
            </li>
            <li>
              <i className="nav-icon fas fa-briefcase"></i>&nbsp;
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <i className="nav-icon fas fa-mail-bulk"></i>
              <a href="#contact">&nbsp;Contact</a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div id="home" className="home">
          <div className="home-header">
            {/* <ul className="technology-logos">
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
            </ul> */}
            {/* <h2 className="warning">
              <i className="fas fa-tools"></i>&nbsp;NOTE: This site is under
              construction. Check back soon!
            </h2> */}
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
                  <li>Curious and Optimistic </li>
                  <li>Entrepreneurial&nbsp;&nbsp;Spirit</li>
                  <li>Agile Project Management</li>
                  <li>Team Collaborator ...</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <ul className="technology-logos">
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
          </ul> */}
        </div>

        <div id="about" className="about">
          <div className="about-details">
            <h2>About</h2>
            <h3>Summary</h3>
            {/* <p>Curious, Entrepreneurial and Optimistic</p> */}
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            {/* <h3>Technical</h3> */}
            <span className="technical">
              <ul className="skills">
                <li>
                  <h3>Technical Skills</h3>
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
                  <strong>Languages:</strong> C#, SQL, HTML, CSS, Typescript
                </li>
                <li className="technical-skills">
                  <strong>Projects:</strong> Aha!, Azure ADO, Jira, Smartsheets
                </li>
                <li className="technical-skills">
                  <strong>REST API:</strong> Cloudinary, Geocode, Mapbox
                </li>
                <li className="technical-skills">
                  <strong>Software:</strong> Figma, MS Office, GSuite, Shopify
                </li>
              </ul>

              <ul className="community">
                <li>
                  <h3>Technical Community</h3>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/BaltimoreTechiesforGood/"
                    target="_blank"
                  >
                    Baltimore Techies for Good / TechSoup Group
                  </a>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/St-Pete-NET-Meetup/"
                    target="_blank"
                  >
                    St. Pete.NET Meetup
                  </a>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/suncoast-developers-guild/"
                    target="_blank"
                  >
                    Suncoast Developers Guild Open Code Meetup
                  </a>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/Tampa-Bay-PostgreSQL-Users-Group/"
                    target="_blank"
                  >
                    Tampa Bay PostgreSQL Users Group Meetup
                  </a>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/SEO-Training-Tampa/"
                    target="_blank"
                  >
                    Tampa SEO &amp; Internet Marketing Meetup
                  </a>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/Tech4Good-Tampa/"
                    target="_blank"
                  >
                    Tech4Good Tampa Meetup
                  </a>
                </li>
                <li className="meetups">
                  <a
                    href="https://www.meetup.com/Women-Who-Code-Tampa/"
                    target="_blank"
                  >
                    Women Who Code Tampa Meetup
                  </a>
                </li>
              </ul>
            </span>

            {/* <h3>Work History</h3>
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
            </h4> */}

            <h3>Community Service</h3>

            <p className="community-service">
              <strong>
                <em>St. Pete ReCANvers - Reclaim. Reincarnate. ReCANver</em>
              </strong>
              <br />A personal project created to collect aluminum cans from the
              community and recycle them for money to be donated to local St
              Petersburg, FL non-profit &nbsp;
              <a href="https://www.purposethroughpassion.com/" target="_blank">
                Purpose Through Passion
              </a>
              . In 9 months, over 300 pounds of cans have been recycled with
              proceeds donated to benefit their clients in recovery.
            </p>
            <p className="community-service">
              <strong>
                <em>Technical Solutions&nbsp;/&nbsp;Web Development Day</em>
              </strong>
              <br />
              Hackathon to benefit&nbsp;
              <a
                href="https://www.meetup.com/BaltimoreTechiesforGood/"
                target="_blank"
              >
                Baltimore Techies for Good&nbsp;/&nbsp;TechSoup Group
              </a>
            </p>

            <button className="button" type="submit">
              <a
                href="https://docs.google.com/document/d/1Q0ViUKuc30iZfFhvI1lbVgyZfo_tfEDQ/edit?usp=sharing&ouid=102913186379479915182&rtpof=true&sd=true"
                target="_blank"
              >
                <i className="fas fa-file"></i>
                &nbsp;View Resume
              </a>
            </button>
          </div>
        </div>

        <div id="portfolio" className="portfolio">
          <h2>Portfolio</h2>
          <h3>
            <a href="https://stpete.pet" target="blank">
              StPete.pet
            </a>
          </h3>

          <ul className="listing-details">
            <li>
              <a href="https://stpete.pet" target="blank">
                <img
                  src={stpetepet}
                  alt="StPete dot pet website screenshot"
                  width="250"
                />
              </a>
            </li>
            <li>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </li>
          </ul>

          <h3>
            <a href="https://color-picker-soltesz.netlify.app/" target="blank">
              Color Picker
            </a>
          </h3>
          <ul className="listing-details">
            <li>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </li>
            <li>
              <a
                href="https://color-picker-soltesz.netlify.app/"
                target="blank"
              >
                <img
                  src={colorpicker}
                  alt="Color Picker website screenshot"
                  width="250"
                />
              </a>
            </li>
          </ul>

          <h3>
            <a href="https://roshambo-ssoltesz.netlify.app" target="blank">
              Roshambo
            </a>
          </h3>
          <ul className="listing-details">
            <li>
              <a href="https://roshambo-ssoltesz.netlify.app" target="blank">
                <img
                  src={roshambo}
                  alt="StPete dot pet website screenshot"
                  width="250"
                />
              </a>
            </li>
            <li>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </li>
          </ul>
          <h3>
            <a href="https://roshambo-ssoltesz.netlify.app" target="blank">
              Octocats
            </a>
          </h3>
          <ul className="listing-details">
            <li>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </li>
            <li>
              <a href="https://stpete.pet" target="blank">
                <img
                  src={stpetepet}
                  alt="StPete dot pet website screenshot"
                  width="250"
                />
              </a>
            </li>
          </ul>
        </div>

        <div id="contact" className="contact">
          <h2>Contact</h2>
          <ul>
            <li>
              <a href="https://github.com/shawnsoltesz" target="_blank">
                <i className="github fab fa-github-square"></i>
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://www.linkedin.com/in/shawn-soltesz/"
                target="_blank"
              >
                <i className="linkedin fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:shawnjsoltesz@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </li>
            <li>
              <a href="tel:410-802-6550">
                <i className="phone fas fa-phone-alt"></i>
              </a>
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
