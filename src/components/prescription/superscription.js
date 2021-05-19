import React from "react"

const Superscription = ({ children }) => {
  return (
    <div className="columns is-mobile">
      <div className="column is-2-tablet is-3-mobile is-hidden-mobile-only">
        <div className="content is-large pt-3">
          <h1>Rx</h1>
        </div>
      </div>

      <div className="column">
        <div className="content is-normal my-3 is-family-monospace">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Superscription
