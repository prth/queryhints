import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { rhythm } from "../utils/typography"

const HeaderSubPage = () => {
  return (
    <header>
      <div
        style={{
          display: `flex`,
          justifyItems: "top",
        }}
      >
        <div>
          <h5
            style={{
              marginTop: 0,
              marginBottom: rhythm(1 / 5),
              textAlign: "center",
              opacity: "0.25",
            }}
          >
            <Link
              to="/"
              style={{
                boxShadow: `none`,
                color: "inherit",
              }}
            >
              Queryhints
            </Link>
          </h5>
        </div>
      </div>
    </header>
  )
}

HeaderSubPage.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderSubPage.defaultProps = {
  siteTitle: ``,
}

export default HeaderSubPage
