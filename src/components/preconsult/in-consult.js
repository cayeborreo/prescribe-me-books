import React, { Fragment } from "react"

import Hero from "../layout/hero"
import { DrLibby } from "../layout/media-objects"

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
        <DrLibby>
          <p>
            Hi <b>{patientName}</b>. I'm Dr Libby. Nice to meet you. 😊
          </p>
          <p>
            I see your main concern today is you've been{" "}
            <b>feeling {chiefComplaint?.toLowerCase()}</b>?
          </p>
        </DrLibby>
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
