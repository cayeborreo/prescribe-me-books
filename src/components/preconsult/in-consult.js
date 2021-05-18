import React, { Fragment } from "react"
import Container from "../layout/Container"
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
              <p>Hi {patientName}. I'm Dr Libby. Nice to meet you. 😊</p>
              <p>
                I see your main concern today is you've been feeling{" "}
                {chiefComplaint?.toLowerCase()}?
              </p>
            </div>
          </div>
        </article>
      </Hero>

      <Container>
        <center>
          <button className="button is-primary is-large" onClick={handleClick}>
            Yes, doc
          </button>
        </center>
      </Container>
    </Fragment>
  )
}

export default InConsult
