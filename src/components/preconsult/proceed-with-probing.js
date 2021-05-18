import React, { Fragment } from "react"
import { navigate } from "gatsby-link"
import { StaticImage } from "gatsby-plugin-image"

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
      <Hero color="primary" addBox>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <StaticImage
                src="../../images/dr-libby-avatar.png"
                layout="constrained"
                width={64}
                alt="Woman in glasses (Dr Libby) avatar"
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content is-medium-desktop">
              <p>I'm sorry to hear that.</p>
              <p>
                Before I can help you, we need to do some <b>history-taking</b>{" "}
                first. Shall we proceed?
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Hero>
        <center>
          <button className="button is-primary is-large" onClick={handleClick}>
            Okay
          </button>
        </center>
      </Hero>
    </Fragment>
  )
}

export default ProceedWithProbing
