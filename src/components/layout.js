import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
import Header from "./header"
import HeaderSubPage from "./header-subpage"
import "./layout.css"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location && location.pathname === rootPath) {
    header = <Header siteTitle={data.site.siteMetadata.title} />
  } else {
    header = <HeaderSubPage siteTitle={data.site.siteMetadata.title} />
  }

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <div>
        {header}
        <main>{children}</main>
        <footer
          style={{
            marginTop: rhythm(5),
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
