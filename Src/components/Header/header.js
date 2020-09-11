import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from './menu'
import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div
      className="main"
    >
      <div className="logo">
        <Link
          to="/"
          className="link"
        >
          {siteTitle}
        </Link>
      </div>
      <Menu />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
