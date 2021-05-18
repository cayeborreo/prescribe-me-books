import { navigate } from "gatsby-link"
import React, { Fragment } from "react"
import Hero from "../layout/hero"
import { DrLibby } from "../layout/media-objects"

const Reassess = ({ paths, state, dispatch }) => {
  return (
    <Fragment>
      <Hero color="primary" addBox>
        <DrLibby>
          <p>So how are you really, {state?.preConsult?.patientName}?</p>
        </DrLibby>
      </Hero>

      <Hero>
        <center>
          <div className="buttons">
            {paths?.map((path, index) => {
              console.log(path)
              return (
                <button
                  className="button is-fullwidth"
                  key={index}
                  onClick={() => navigate(`/probing/${path?.data?.url}`)}
                >
                  {path?.data?.name}
                </button>
              )
            })}
          </div>
        </center>
      </Hero>
    </Fragment>
  )
}

export default Reassess
