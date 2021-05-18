import React, { useContext } from "react"
import PropTypes from "prop-types"
import { navigate } from "gatsby"
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
      <div className="navbar-brand">
        <a
          href="/#"
          className="navbar-item has-text-weight-bold"
          onClick={handleHomeClick}
        >
          {siteTitle}
        </a>
      </div>
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
