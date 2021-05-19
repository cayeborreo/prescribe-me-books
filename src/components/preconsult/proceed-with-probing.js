import React, { Fragment } from "react"
import { navigate } from "gatsby-link"

import Hero from "../layout/hero"
import { DrLibby } from "../layout/media-objects"

const ProceedWithProbing = ({ state, dispatch }) => {
  const handleClick = () => {
    dispatch({
      type: "UPDATE_PROBING_STATUS",
      payload: "FINISHED_PRECONSULT",
    })
    navigate(`/probing/${state?.preConsult?.path}`)
  }
  return (
    <Fragment>
      <Hero color="primary" addBox>
        <DrLibby>
          <p>Sorry to hear that. I'm glad you're here now.</p>
          <p>
            Before anything else, we need to do some <b>history-taking</b>.
            Shall we proceed?
          </p>
        </DrLibby>
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
