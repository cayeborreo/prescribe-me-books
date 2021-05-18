import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import PreconsultPage from "../components/preconsult/preconsult-page"

const IndexPage = props => {
  return (
    <Layout>
      <Seo title="Home" />
      <PreconsultPage paths={props?.data?.allAirtablePaths?.nodes} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query getPaths {
    allAirtablePaths {
      nodes {
        data {
          name
          url
        }
      }
    }
  }
`
