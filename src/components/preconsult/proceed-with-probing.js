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
          <p>Sorry to hear that.</p>
          <p>
            But I'm glad you're here now. Before I can help you though, we need
            to do some <b>history-taking</b>. Shall we proceed?
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
