import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "../images/icon.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon
        style={{
          height: 32,
          fill: "#7b1fa2",
        }}
      />
      <h1 style={{ margin: 0, paddingLeft: "6px", fontSize: "28px" }}>
        <Link
          to="/"
          style={{
            color: `#111`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
