import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Hero from "../layout/hero"

const Queue = () => {
  return (
    <Fragment>
      <Hero color="primary" addBox>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <StaticImage
                src="../../images/receptionist-avatar.png"
                layout="constrained"
                width={64}
                alt="Guy in glasses (receptionist) avatar"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content is-medium-desktop is-family-monospace">
              <p>
                All right, thanks. Please wait for Dr Libby to call you, it
                won't be long.
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Hero>
        <div className="loader" />
      </Hero>
    </Fragment>
  )
}

export default Queue
