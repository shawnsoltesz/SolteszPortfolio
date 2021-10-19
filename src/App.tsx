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
                  <li>Customer Centric</li>
                  <li>Entrepreneurial&nbsp;&nbsp;Spirit</li>
                  <li>Agile Project Management</li>
                  <li>Team Collaborator ...</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div id="about" className="about">
          <div className="about-details">
            <h2 className="section-header">About</h2>
            <h3>Summary</h3>
            <p>
              After spending 15 years in various operational and implementation
              roles within Ed Tech, Shawn felt unsure of his exact career
              trajectory. Therefore after considering what excited him about his
              work experiences, all signs pointed to working with the technology
              that powered the products, and the users. Therefore, he decided to
              take a pause and enrolled in the three month immersive Full Stack
              Web Development immersive bootcamp with&nbsp;
              <a href="https://suncoast.io" target="blank">
                Suncoast Developers Guild
              </a>
              . &nbsp;In this full time bootcamp, Shawn pursued the skills and
              knowledge that offers opportunities to be hands on with building
              and supporting the products created and used by the end-user.
            </p>
            <p>
              Shawn is a multifaceted professional who is interested in pursuing
              a career in web development with interests in front end coding,
              project management, business analysis, QA and information
              architecture. He is flexible, curious, analytical, and has a knack
              for ensuring results are in line with expected outcomes. He
              possesses experience with agile software development and the tools
              used to support this approach through the SDLC.
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
                  <strong>Software:</strong> Beekeeper Studio, Figma, GSuite,
                  Insomnia, MS Office, VS Code
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
                {/* <li className="meetups">
                  <a
                    href="https://www.meetup.com/Women-Who-Code-Tampa/"
                    target="_blank"
                  >
                    Women Who Code Tampa Meetup
                  </a>
                </li> */}
              </ul>
            </span>
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
              Hackathon to benefit community nonprofits through&nbsp;
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
          <h2 className="section-header">Portfolio</h2>
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
                StPete.pet is my capstone project to implement all of the topics
                taught during the fulltime three month immersive bootcamp, to
                produce a full stack web application.
              </p>

              <p>This large project was completed in the following phases:</p>

              <ul className="capstone-phases">
                <li>
                  <strong>Phase One</strong>&nbsp;-&nbsp;Create&nbsp;
                  <a
                    href="https://docs.google.com/document/d/1rwu-7aoeaR-BJW92am9CslifYHxaMW6vYoZ6-sM8Frk/edit?usp=sharing"
                    target="blank"
                  >
                    user stories
                  </a>
                  , build&nbsp;
                  <a
                    href="https://docs.google.com/document/d/1qM-4b8j0g1N7xRRZVd6H6ORSk7xBbCkMz435XwUZUDQ/edit?usp=sharing"
                    target="blank"
                  >
                    wireframes
                  </a>
                  &nbsp;of the pages/UI using Figma, create the&nbsp;
                  <a
                    href="https://docs.google.com/document/d/1zQj8uuRNkCFhO3G8e0LPYNMh4MNDw0qIUBNE1fsCvRE/edit?usp=sharing"
                    target="blank"
                  >
                    Entity Relationship Diagram
                  </a>
                  &nbsp;of the application&apos;s data needs and build static
                  HTML and CSS page mockups.
                </li>
                <li>
                  <strong>Phase Two</strong>&nbsp;-&nbsp;Generate models and
                  controllers to establish the database and API. Create the
                  React component and configure a method to fetch data. Test
                  functionality for creating and reading a record.
                </li>
                <li>
                  <strong>Phase Three</strong>&nbsp;-&nbsp;Build out pages and
                  features to include Search, fetching photos from Cloudinary,
                  fetching address geocodes from Bing Map Geocodes and viewport
                  map renderings from MapBox APIs. Configure the application to
                  restrict actions within the application based on the
                  user&apos;s authentication and authorization.
                </li>
                <li>
                  <strong>Phase Four</strong>&nbsp;-&nbsp;Deploy the application
                  to Heroku and perform complete functionality testing as well
                  as bug troubleshooting.
                </li>
              </ul>

              {/* <h4>Technology Used:</h4>
              <p className="technology-icons">
                <i className="fab fa-react"></i>
              </p> */}
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
                Minesweeper married together many technologies and objectives -
                practicing with Flexbox, understanding how state drives changes
                to an interface in React and responding to user events in React,
                working with two-dimensional arrays, understanding API
                documentation and using fetch to perform a POST request to a
                REST API.
              </p>
              {/* <h4>Technology Used:</h4>
              <p className="technology-icons"></p> */}
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
              {/* <h4>Technology Used:</h4>
              <p className="technology-icons"></p> */}
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
                version of the game -&nbsp;
                <a href="https://youtu.be/x5Q6-wMx-K8" target="blank">
                  <em>Rock, Paper, Scissors, Lizard, Spock</em>
                </a>
                .
              </p>
              {/* <h4>Technology Used:</h4>
              <p className="technology-icons"></p> */}
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
              {/* <h4>Technology Used:</h4>
              <p className="technology-icons"></p> */}
            </li>
          </ul>
        </div>

        <div id="contact" className="contact">
          <h2 className="section-header">Contact</h2>
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
            Florida &nbsp;©2021 Shawn Soltesz
          </p>
        </div>
      </footer>
    </div>
  )
}
