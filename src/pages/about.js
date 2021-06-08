import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import AboutSite from "../components/about-site"

const About = () => {
  return (
    <Layout>
      <Seo title="About" />
      <AboutSite />
    </Layout>
  )
}

export default About
