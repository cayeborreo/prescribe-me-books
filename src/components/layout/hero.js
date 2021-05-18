import classNames from "classnames"
import React from "react"
import Container from "./container"

const Hero = ({ children, color = "light", addBox = false }) => {
  return (
    <section className={`hero is-${color}`}>
      <div className="hero-body">
        <Container>
          <div className={classNames({ box: addBox })}>{children}</div>
        </Container>
      </div>
    </section>
  )
}

export default Hero
