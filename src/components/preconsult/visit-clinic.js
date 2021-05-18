import React, { Fragment } from "react"

import Hero from "../layout/hero"

const VisitClinic = ({ dispatch }) => {
  const visitClinic = () => {
    dispatch({
      type: "UPDATE_PRECONSULT_STATUS",
      payload: "FILL_OUT_FORM",
    })
  }
  return (
    <Fragment>
      <Hero color="primary" addBox>
        <div className="block mb-3">
          <span className="tag is-warning is-family-monospace is-uppercase has-text-weight-bold">
            Dr Libby's Clinic
          </span>
        </div>
        <div className="content has-text-centered mt-5">
          <h3 className="is-size-3 mb-1">The doctor is</h3>
          <h1
            className="is-size-1 mt-2"
            style={{
              border: "4px solid black",
              display: "inline-block",
              padding: ".5rem 3rem",
            }}
          >
            IN
          </h1>
        </div>
      </Hero>
      <Hero color="light">
        <center>
          <button onClick={visitClinic} className="button is-primary is-large">
            Drop by clinic
          </button>
        </center>
      </Hero>
    </Fragment>
  )
}

export default VisitClinic
