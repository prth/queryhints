import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import QueryViewer from "../components/query/QueryViewer"
import { rhythm } from "../utils/typography"
import { useDatabases } from "../hooks/use-databases"

const DatabaseTemplate = ({ data, location }) => {
  const databasePost = data.database
  const title = `${databasePost.frontmatter.title} cheatsheet`

  return (
    <Layout location={location}>
      <SEO title={title} />

      <h2
        style={{
          marginTop: rhythm(1 / 2),
          marginBottom: rhythm(1 / 2),
        }}
      >
        {title}
      </h2>
      <section
        className="database-post"
        dangerouslySetInnerHTML={{ __html: databasePost.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query DatabasePostBySlug($slug: String!) {
    database: markdownRemark(
      frontmatter: { template: { eq: "database" }, slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
        slug
        queryViewerLanguage
      }
    }
  }
`

export default DatabaseTemplate
