import React, { Fragment } from "react"
import { StaticImage } from "gatsby-plugin-image"

import Hero from "../layout/hero"

const InConsult = ({ state, dispatch }) => {
  const { patientName, chiefComplaint } = state?.preConsult

  const handleClick = () => {
    dispatch({
      type: "UPDATE_PRECONSULT_STATUS",
      payload: "PROCEED_WITH_PROBING",
    })
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
              <p>
                Hi <b>{patientName}</b>. I'm Dr Libby. Nice to meet you. 😊
              </p>
              <p>
                I see your main concern today is you've been{" "}
                <b>feeling {chiefComplaint?.toLowerCase()}</b>?
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Hero>
        <center>
          <button className="button is-primary is-large" onClick={handleClick}>
            Yes, doc
          </button>
        </center>
      </Hero>
    </Fragment>
  )
}

export default InConsult
