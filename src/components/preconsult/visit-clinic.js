import React, { Fragment } from "react"
import Container from "../layout/Container"
import Hero from "../layout/hero"

const VisitClinic = ({ state, dispatch }) => {
  const visitClinic = () => {
    dispatch({
      type: "UPDATE_PRECONSULT_STATUS",
      payload: "FILL_OUT_FORM",
    })
  }
  return (
    <Fragment>
      <Hero>
        <span className="tag is-medium is-warning">DR. LIBBY'S CLINIC</span>
        <br />
        <div className="content has-text-centered mt-5">
          <h3 className="is-size-3 mb-1">The doctor is</h3>
          <h1
            className="is-size-1 mt-2"
            style={{
              border: "4px solid black",
              display: "inline-block",
              padding: ".5rem 5rem",
            }}
          >
            IN
          </h1>
        </div>
      </Hero>
      <Container>
        <center>
          <button onClick={visitClinic} className="button is-primary is-large">
            Drop by clinic
          </button>
        </center>
      </Container>
    </Fragment>
  )
}

export default VisitClinic
