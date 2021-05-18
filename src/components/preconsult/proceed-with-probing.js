import { navigate } from "gatsby-link"
import React, { Fragment } from "react"
import Container from "../layout/Container"
import Hero from "../layout/hero"

const ProceedWithProbing = ({ state, dispatch }) => {
  const handleClick = () => {
    dispatch({
      type: "UPDATE_PRECONSULT_STATUS",
      payload: "FINISH_PRECONSULT",
    })
    navigate(`/probing/${state?.preConsult?.path}`)
  }
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
            <div className="content is-medium">
              <p>I'm sorry to hear that.</p>
              <p>
                Before I can help you, I need to do some history-taking first.
                Shall we proceed?
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Container>
        <center>
          <button className="button is-primary is-large" onClick={handleClick}>
            Okay
          </button>
        </center>
      </Container>
    </Fragment>
  )
}

export default ProceedWithProbing
