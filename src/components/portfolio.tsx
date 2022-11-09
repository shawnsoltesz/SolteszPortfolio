import React from 'react'

import stpetepet from '../images/spp_screenshot.png'
import colorpicker from '../images/color_picker_screenshot.png'
import roshambo from '../images/roshambo_screenshot.png'
import octodex from '../images/octodex_screenshot.png'
import minesweeper from '../images/minesweeper_screenshot.png'

export function Portfolio() {
  return (
    <div id="portfolio">
      <div className="portfolio">
        <h1 className="portfolio-section-header">Portfolio</h1>
        <h2>
          <a
            className="project-title"
            href="https://stpete.pet"
            rel="noreferrer"
            target="_blank"
          >
            StPete.pet
          </a>
        </h2>

        <ul className="listing-details">
          <li className="screenshot">
            <a href="https://stpete.pet" rel="noreferrer" target="_blank">
              <img
                src={stpetepet}
                alt="StPete dot pet website screenshot"
                width="250"
              />
            </a>
          </li>
          <li>
            <p>
              StPete.pet is a full stack web application. The inspiration for
              this project was derived from how pet friendly St Petersburg is as
              a city. While some of the businesses and points of interests are
              widely know to fellow pet owners, some are not. So it is my hope
              to showcase everywhere pets are welcome. &#40;
              <strong>&#35;petswelcomehere</strong>&#41;
            </p>

            <p>This project was completed in the following phases:</p>

            <ul className="capstone-phases">
              <li>
                <strong>Phase One</strong>&nbsp;-&nbsp;Create&nbsp;
                <a
                  href="https://docs.google.com/document/d/1rwu-7aoeaR-BJW92am9CslifYHxaMW6vYoZ6-sM8Frk/edit?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  user stories
                </a>
                , build&nbsp;
                <a
                  href="https://docs.google.com/document/d/1qM-4b8j0g1N7xRRZVd6H6ORSk7xBbCkMz435XwUZUDQ/edit?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  wireframes
                </a>
                &nbsp;of the pages/UI using Figma, create the&nbsp;
                <a
                  href="https://docs.google.com/document/d/1zQj8uuRNkCFhO3G8e0LPYNMh4MNDw0qIUBNE1fsCvRE/edit?usp=sharing"
                  rel="noreferrer"
                  target="_blank"
                >
                  Entity Relationship Diagram
                </a>
                &nbsp;of the application&apos;s data needs and build static HTML
                and CSS page mockups.
              </li>
              <li>
                <strong>Phase Two</strong>&nbsp;-&nbsp;Generate models and
                controllers to establish the database and API. Create the React
                component and configure a method to fetch data. Test
                functionality for creating and reading a record.
              </li>
              <li>
                <strong>Phase Three</strong>&nbsp;-&nbsp;Build out pages and
                features to include Search, fetching photos from Cloudinary,
                fetching address geocodes from Bing Map Geocodes and viewport
                map renderings from MapBox APIs. Configure the application to
                restrict actions within the application based on the user&apos;s
                authentication and authorization. Complete CRUD capabilities -
                ability to update and delete a record.
              </li>
              <li>
                <strong>Phase Four</strong>&nbsp;-&nbsp;Deploy the application
                to Heroku and perform complete functionality testing as well as
                bug troubleshooting.
              </li>
            </ul>
            <br />
            <p>
              <strong>Tech Stack:</strong> C#, .NET, PostgreSQL, REST API,
              Fetch, Typescript, Javascript, React, HTML, CSS
            </p>
          </li>
        </ul>

        <h2>
          <a
            className="project-title"
            href="https://mine-sweeper-ssoltesz.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Minesweeper
          </a>
        </h2>
        <ul className="listing-details">
          <li className="screenshot">
            <a
              href="https://mine-sweeper-ssoltesz.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={minesweeper}
                alt="Minesweeper website screenshot"
                width="250"
              />
            </a>
          </li>
          <li>
            <p>
              Minesweeper combined many technologies and objectives - practicing
              with Flexbox, understanding how state drives changes to an
              interface in React and responding to user events in React, working
              with two-dimensional arrays, understanding API documentation and
              using fetch to perform a POST request to a REST API.
            </p>

            <p>
              <strong>Tech Stack:</strong> REST API, two-dimensional arrays,
              Typescript, Javascript, React, HTML, CSS
            </p>
          </li>
        </ul>
        <h2>
          <a
            className="project-title"
            href="https://color-picker-soltesz.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Color Picker
          </a>
        </h2>
        <ul className="listing-details">
          <li className="screenshot">
            <a
              href="https://color-picker-soltesz.netlify.app/"
              rel="noreferrer"
              target="_blank"
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
              &#40;hue, saturation and lightness&#41;, which is one of the color
              identification methods that CSS supports. But along with the HSL
              color percentages, the website responds to user events using
              React. Hooks were used to drive the changes to the user interface,
              and props rendered the inline styles to dynamically update the
              appearance of the selected DOM elements.
            </p>

            <p>
              <strong>Tech Stack:</strong> Typescript, Javascript, React, HTML,
              SCSS
            </p>
          </li>
        </ul>

        <h2>
          <a
            className="project-title"
            href="https://roshambo-ssoltesz.netlify.app"
            rel="noreferrer"
            target="_blank"
          >
            Roshambo
          </a>
        </h2>
        <ul className="listing-details">
          <li className="screenshot">
            <a
              href="https://roshambo-ssoltesz.netlify.app"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={roshambo}
                alt="Roshambo website screenshot"
                width="250"
              />
            </a>
          </li>
          <li>
            <p>
              Roshambo is a project that builds the classic &quot;Rock, Paper,
              Scissors&quot; game while allowing for practice with UI
              wireframes, HTML, JavaScript, CSS, working with the DOM as well as
              conditional logic for determining a winner based on each
              player&apos;s selection. This version of the game also offers
              additional options for a player to select, based on a different
              version of the game -&nbsp;
              <a
                href="https://youtu.be/x5Q6-wMx-K8"
                rel="noreferrer"
                target="_blank"
              >
                <em>Rock, Paper, Scissors, Lizard, Spock</em>
              </a>
              .
            </p>

            <p>
              <strong>Tech Stack:</strong> REST API, Fetch, Typescript, HTML
              CSS, DOM, Conditional Logic
            </p>
          </li>
        </ul>
        <h2>
          <a
            className="project-title"
            href="https://octodex-ssoltesz.netlify.app/"
            rel="noreferrer"
            target="_blank"
          >
            Octodex
          </a>
        </h2>
        <ul className="listing-details">
          <li className="screenshot">
            <a
              href="https://octodex-ssoltesz.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={octodex} alt="Octodex website screenshot" width="250" />
            </a>
          </li>
          <li>
            <p>
              This project demonstrated the ability to implement, from scratch,
              a given website UI design. I rebuilt the Github&apos;s gallery
              named <a href="https://octodex.github.com/">Octodex</a>, which
              contains variations of their mascot, Octocat. The goal for this
              project was incorporate a sampling of the Octocats to practice
              HTML &amp; CSS, including Flexbox, while also leveraging the
              browser&apos;s Developer Tools.
            </p>

            <p>
              As an add-on, to practice with React, a second version of this
              project,&nbsp;
              <a
                className="second-version-project-title"
                href="https://reactocats-ssoltesz.netlify.app/"
                rel="noreferrer"
                target="_blank"
              >
                Reactocats
              </a>
              &nbsp;was created. The foundation was repurposing the existing
              HTML and CSS, but implementing Typescript through the render
              method of the App component, SCSS, and a component for an Octocat.
              The component uses props to customize each block, rendering the
              image and all related details for each cat image.
            </p>

            <p>
              <strong>Tech Stack:</strong> <em>Octodex</em> - Typescript, HTML,
              CSS, Flexbox, Developer Tools&nbsp;&nbsp;| &nbsp;&nbsp;
              <em>Reactocats</em> - Typescript, Javascript, React, HTML, CSS,
              SCSS
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
