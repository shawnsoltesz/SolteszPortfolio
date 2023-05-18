/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
export function About() {
  return (
    <div className="about" id="about">
      <div className="about-details">
        <h1 className="about-section-header">About</h1>
        <h2>Career Summary</h2>

        <p>
          Shawn is a multifaceted professional with over 15 years of operational
          and implementation experience in Auto and Ed Tech. He is interested in
          opportunities that leverage his software development interests in
          product and web development, UX/UI and QA. He is a strong communicator
          and collaborator who has an appetite to learn, is adaptable, curious,
          analytical, and has a knack for verifying results that are in line
          with requirements and expected behavior. Shawn possesses experience
          with agile software development and the tools used to support this
          approach through the SDLC.
        </p>

        <p>
          Additionally, Shawn attended the Summer 2021 three month immersive
          Full Stack Web Development bootcamp with&nbsp;
          <a
            className="sdg"
            href="https://suncoast.io/grads/cohort-22/"
            target="_blank"
          >
            Suncoast Developers Guild
          </a>
          &nbsp;in St Petersburg, FL. Through this full-time bootcamp, Shawn
          pursued the skills and education to be hands-on and create front and
          back end coding projects, before building a full stack application
          -&nbsp;
          <a className="sdg" href="https://StPete.pet" target="_blank">
            StPete.pet
          </a>
          .
        </p>

        <span className="technical">
          <ul className="skills">
            <li>
              <h2>Technical Skills</h2>
            </li>
            <li className="technical-skills">
              <strong>DevOps:</strong> AWS, Confluence, Dropbox, GitHub
            </li>
            <li className="technical-skills">
              <strong>Frameworks:</strong> React
            </li>
            <li className="technical-skills">
              <strong>Languages:</strong> HTML, CSS, Javascript, Typescript
            </li>
            <li className="technical-skills">
              <strong>Projects:</strong> Aha!, Jira, Salesforce TaskRay,
              Smartsheets
            </li>

            <li className="technical-skills">
              <strong>Software:</strong> Figma, GSuite, MS Office, Salesforce,
              Slack, VS Code
            </li>
          </ul>

          <ul className="community">
            <li>
              <h2>Technical Community</h2>
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
                href="https://www.meetup.com/suncoast-developers-guild/"
                target="_blank"
              >
                Suncoast Developers Guild Open Code Meetup
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
              <a href="https://www.meetup.com/Tech4Good-Tampa/" target="_blank">
                Tech4Good Tampa Meetup
              </a>
            </li>
          </ul>
        </span>
        <h2>Community Service</h2>
        <p className="community-service">
          <strong>
            <em>St. Pete ReCANvers - Reclaim. Reincarnate. ReCANver</em>
          </strong>
          <br />
          <br />A personal project created to collect aluminum cans from the
          community and recycle them for money to be donated to local St
          Petersburg, FL non-profit &nbsp;
          <a href="https://www.purposethroughpassion.com/" target="_blank">
            Purpose Through Passion
          </a>
          . In 12 months, over 500 pounds of cans have been recycled with
          proceeds donated to benefit their clients in recovery.
        </p>
        <p className="community-service">
          <strong>
            <em>Technical Solutions&nbsp;/&nbsp;Web Development Day</em>
          </strong>
          &nbsp;-&nbsp;Hackathon to benefit community nonprofits through&nbsp;
          <a
            href="https://www.meetup.com/BaltimoreTechiesforGood/"
            target="_blank"
          >
            Baltimore Techies for Good&nbsp;/&nbsp;TechSoup Group
          </a>
          <br />
          <br />
          My role on the freshly assembled team was to gather assets and build
          out one of the new landing pages on the organization&apos;s GoDaddy
          platform, dedicated to their virtual incubator program offered through
          Baltimore Job Hunters Support Group and their expansion under the
          nonprofit LifeCareer Pivoteers. In addition to the website assembly,
          my contributions also included identifying gaps with the overall
          information architecture and flow in bringing together three landing
          pages together under one main website in a cohesive manner.
          <br /> <br />
          As a result of our work, Janet Glover-Kerkvliet, Executive Director,
          shared this feedback - <br />
          <br />
          &quot;
          <em>
            I&#39;m already getting positive feedback on our new landing pages!
            There are so many things that were so amazing about being a part of
            TechSoup/Techies for Good Dev Day. Everyone was genuinely interested
            in my work with the Baltimore Job Hunters Support Group and our
            expansion via our umbrella nonprofit LifeCareerPivoteers. Everyone
            was very supportive and kind. It&#39;s hard to describe the feeling
            I got when I saw all that got done on Saturday; the results were
            amazing. There is so much to attend to getting 3 websites going and
            it is something that I couldn&#39;t have done on my own, and I
            appreciate their willingness to work with a platform that I was used
            to.
            <br />
            <br /> I&#39;m so grateful for tech people who are interested in
            helping nonprofits. I know that their skill and expertise is so
            valuable and the assistance I&#39;ve received would have cost
            thousands, so I&#39;m really in awe of everyone&#39;s generosity.
          </em>
          &quot;
        </p>
        {/* <button className="button" type="submit">
          <a
            href="https://docs.google.com/document/d/ViUKuc30iZfFhvI1lbVgyZfo_tfEDQ/edit?usp=sharing&ouid=102913186379479915182&rtpof=true&sd=true"
            target="_blank"
          >
            <span className="button-text">
              <i className="fas fa-file"></i>
              &nbsp;View Resume
            </span>
          </a>
        </button> */}
      </div>
    </div>
  )
}
