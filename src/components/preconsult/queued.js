import React, { Fragment } from "react"
import Container from "../layout/container"
import Hero from "../layout/hero"

const Queue = () => {
  return (
    <Fragment>
      <Hero>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/64x64.png"
                alt="A placeholder"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content is-medium is-family-monospace">
              <p>
                All right, thanks. Please wait for Dr Libby to call you, it
                won't be long.
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Container>
        <div className="loader" />
      </Container>
    </Fragment>
  )
}

export default Queue
