import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      avatar: file(absolutePath: { regex: "/icon.png/" }) {
        childImageSharp {
          fixed(width: 45, height: 45) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header>
      <div
        style={{
          display: `flex`,
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 45,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div>
          <h3
            style={{
              marginTop: 0,
              marginBottom: rhythm(1 / 5),
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
          </h3>
          <p
            style={{
              marginBottom: 0,
              paddingRight: rhythm(1),
            }}
          >
            A collection of cheatsheets for database queries.
          </p>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
