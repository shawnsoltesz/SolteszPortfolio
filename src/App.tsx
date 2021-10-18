/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
// import { Link } from 'react-router-dom'

import logo from './images/soltesz_logo.svg'
import headshot from './images/shawn_soltesz_headshot.jpg'
import stpetepet from './images/spp_screenshot.png'
import colorpicker from './images/color_picker_screenshot.png'
import roshambo from './images/roshambo_screenshot.png'
import octodex from './images/octodex_screenshot.png'
import minesweeper from './images/minesweeper_screenshot.png'

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
              <h4>Technology Used:</h4>
              <p className="technology-icons">
                <i className="fab fa-react"></i>
              </p>
            </li>
          </ul>

          <h3>
            <a href="https://mine-sweeper-ssoltesz.netlify.app/" target="blank">
              Minesweeper
            </a>
          </h3>
          <ul className="listing-details">
            <li>
              <p>
                The Color Picker highlights one of the various ways that we can
                think of colors on the web. For this project, I highlight HSL
                &#40;hue, saturation and lightness&#41;, which is one of the
                color identification methods that CSS supports. But along with
                the HSL color percentages, the website responds to user events
                using React. Hooks were used to drive the changes to the user
                interface, and props rendered the inline styles to dynamically
                update the appearance of the selected DOM elements.
              </p>
              <h4>Technology Used:</h4>
              <p className="technology-icons"></p>
            </li>
            <li>
              <a
                href="https://mine-sweeper-ssoltesz.netlify.app/"
                target="blank"
              >
                <img
                  src={minesweeper}
                  alt="Minesweeper website screenshot"
                  width="250"
                />
              </a>
            </li>
          </ul>

          <h3>
            <a href="https://color-picker-soltesz.netlify.app/" target="blank">
              Color Picker
            </a>
          </h3>
          <ul className="listing-details">
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
            <li>
              <p>
                The Color Picker highlights one of the various ways that we can
                think of colors on the web. For this project, I highlight HSL
                &#40;hue, saturation and lightness&#41;, which is one of the
                color identification methods that CSS supports. But along with
                the HSL color percentages, the website responds to user events
                using React. Hooks were used to drive the changes to the user
                interface, and props rendered the inline styles to dynamically
                update the appearance of the selected DOM elements.
              </p>
              <h4>Technology Used:</h4>
              <p className="technology-icons"></p>
            </li>
          </ul>

          <h3>
            <a href="https://roshambo-ssoltesz.netlify.app" target="blank">
              Roshambo
            </a>
          </h3>
          <ul className="listing-details">
            <li>
              <p>
                Roshambo is a project that builds the classic &quot;Rock, Paper,
                Scissors&quot; game while allowing for practice with UI
                wireframes, HTML, JavaScript, CSS, working with the DOM as well
                as conditional logic for determining a winner based on each
                player&apos;s selection. This version of the game also offers
                additional options for a player to select, based on a different
                version of the game -
                <a href="https://youtu.be/x5Q6-wMx-K8" target="blank">
                  <em>Rock, Paper, Scissors, Lizard, Spock</em>
                </a>
                , which increased the conditional logic for each player.
              </p>
              <h4>Technology Used:</h4>
              <p className="technology-icons"></p>
            </li>
            <li>
              <a href="https://roshambo-ssoltesz.netlify.app" target="blank">
                <img
                  src={roshambo}
                  alt="Roshambo website screenshot"
                  width="250"
                />
              </a>
            </li>
          </ul>
          <h3>
            <a href="https://octodex-ssoltesz.netlify.app/" target="blank">
              Octodex
            </a>
          </h3>
          <ul className="listing-details">
            <li>
              <a href="https://octodex-ssoltesz.netlify.app/" target="blank">
                <img
                  src={octodex}
                  alt="Octodex website screenshot"
                  width="250"
                />
              </a>
            </li>
            <li>
              <p>
                This project demonstrated the ability to implement, from
                scratch, a given website UI design. I rebuilt the Github&apos;s
                gallery named <a href="https://octodex.github.com/">Octodex</a>,
                which contains variations of their mascot, Octocat. The goal for
                this project was incorporate a sampling of the Octocats to
                practice HTML &amp; CSS, including Flexbox, while also
                leveraging the browser&apos;s Developer Tools.
              </p>

              <p>
                As an add-on, to practice with React, a second version of this
                project,&nbsp;
                <a
                  href="https://reactocats-ssoltesz.netlify.app/"
                  target="blank"
                >
                  Reactocats
                </a>
                &nbsp;was created. The foundation was repurposing the existing
                HTML and CSS, but implementing Typescript through the render
                method of the App component, SCSS, and a component for an
                Octocat. The component uses props to customize each block,
                rendering the image and all related details for each cat image.
              </p>
              <h4>Technology Used:</h4>
              <p className="technology-icons"></p>
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
