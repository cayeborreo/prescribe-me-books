/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Hero from "./hero"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main>{children}</main>
      <Hero color="white">
        <footer className="is-size-7">
          © {new Date().getFullYear()}, Built by{" "}
          <a
            href="https://github.com/cayeborreo"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-link"
          >
            @cayeborreo
          </a>{" "}
          using
          {` `}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="has-text-link"
          >
            Gatsby
          </a>
          .{" "}
          <Link to="/about" className="has-text-link">
            About this site
          </Link>
        </footer>
      </Hero>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
