import React, { Fragment } from "react"

import Hero from "../layout/hero"
import { GuyTheReceptionist } from "../layout/media-objects"

const Queue = () => {
  return (
    <Fragment>
      <Hero color="primary" addBox>
        <GuyTheReceptionist>
          <p>
            All right, thanks. Please wait for Dr Libby to call you, it won't be
            long.
          </p>
        </GuyTheReceptionist>
      </Hero>

      <Hero>
        <div className="loader" />
      </Hero>
    </Fragment>
  )
}

export default Queue
