import React from "react"
import Container from "./Container"

const Hero = ({ children }) => {
  return (
    <section className="hero is-primary">
      <div className="hero-body">
        <Container>
          <div className="box">{children}</div>
        </Container>
      </div>
    </section>
  )
}

export default Hero
