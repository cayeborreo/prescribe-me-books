import React, { useContext } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { AppContext } from "../../context/context"

const Header = ({ siteTitle }) => {
  const { dispatch } = useContext(AppContext)

  const handleHomeClick = () => {
    dispatch({
      type: "RESET_STATE",
    })
    navigate("/")
  }
  return (
    <nav
      className="navbar is-primary is-family-monospace"
      role="navigation"
      aria-label="main navigation"
    >
      <a href="/#" className="navbar-brand" onClick={handleHomeClick}>
        <StaticImage
          layout="fixed"
          src="../../images/prescribe-me-books-logo.png"
          className="image 1x1 navbar-item m-3 is-clickable"
          alt="Prescribe Me Books logo"
          width={28}
        />
        <a href="/#" className="navbar-item has-text-weight-bold">
          {siteTitle}
        </a>
      </a>
    </nav>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
