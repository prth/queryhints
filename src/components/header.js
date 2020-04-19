import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Icon from "../images/icon.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.25rem 1.0875rem`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Icon
        style={{
          height: 28,
          fill: "#7b1fa2",
        }}
      />
      <h1 style={{ margin: 0, paddingLeft: "6px", fontSize: "24px" }}>
        <Link
          to="/"
          style={{
            color: `#222`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link> <span style={{ color: '#aaa' }}>*wip*</span>
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
