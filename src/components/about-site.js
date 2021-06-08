import { StaticImage } from "gatsby-plugin-image"
import React, { Fragment } from "react"
import Hero from "./layout/hero"

const AboutSite = () => {
  return (
    <Fragment>
      <Hero color="primary" addBox>
        <h1 className="is-size-5 has-text-weight-bold">
          It started with a (bookish) web developer's bare portfolio.
        </h1>
      </Hero>

      <Hero color="white">
        <div className="content">
          <p>
            Building this website had been fun because, well, there was no
            pressure for it to be anything. It just had to be <em>something</em>
            .
          </p>
          <p>
            This was around the time I left my first job. When I decided to
            reapply elsewhere I realized I had nothing to show for it in my
            portfolio, so I figured, how about I create something that shows
            what I can now do dev-wise?
          </p>
          <p>
            <b>I wanted one that highlighted my frontend skills.</b> Designing
            the user experience, wireframing, starting from scratch, employing
            various tech tools, sourcing data from an external CMS (okay, fine,
            some backend skills as well), and finally laying it all out in a
            website and deploying it—these were some of the tasks I did in my
            past job (probably boils down to just ~30% of my week, though 😅).
          </p>
          <p>
            It's a website, alright. It's just a matter of{" "}
            <em>What will this website be about?</em>
          </p>
          <p>
            <center>* * *</center>
          </p>
          <p>
            <b>
              Having circles of non-tech friends you can consult every now and
              then for tech reasons is super interesting
            </b>
            —they give perspectives beyond the tech hat you often wear. (They
            were also my beta testers. I love them all.)
          </p>
          <p>
            I have to give credit where credit is due: Thanks to my college
            friend Paolo for the random brain fart which I took seriously.
          </p>
          <StaticImage
            src="../images/brain-fart.png"
            layout="constrained"
            alt="A conversation"
          />
          <p>
            It was pretty easy to build off of this premise because I am a
            really avid reader since high school. I understand this project
            reveals my taste in literature (somewhat embarrassingly because it
            feels like it's a soul-baring activity), but if it gets people to
            read my favorite books and authors, that would be really cool.
          </p>
          <p>
            <center>* * *</center>
          </p>
          <p>Here is the tech stack involved in this project:</p>
          <ul>
            <li>PWA powered by React via GatsbyJS</li>
            <li>CSS framework by Bulma</li>
            <li>Data source/CMS by Airtable</li>
            <li>Hosting/deployment by Netlify</li>
            <li>Version control by Github</li>
            <li>Assets by Canva</li>
          </ul>
          <p>
            I{" "}
            <a
              href="https://mcborreo.medium.com/designing-the-quiz-app-experience-and-building-it-with-gatsby-airtable-f5fbd98c280b"
              target="_blank"
              rel="noopener noreferrer"
              className="has-text-link"
            >
              wrote my whole thought process
            </a>{" "}
            on developing this project over at Medium.
          </p>
          <p>
            Thank you for stopping by! I hope Dr Libby's prescriptions do you
            good 🤓
          </p>
        </div>
      </Hero>
    </Fragment>
  )
}

export default AboutSite
