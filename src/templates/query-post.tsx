import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import QueryViewer from "../components/query/QueryViewer"
import { rhythm } from "../utils/typography"

const QueryTemplate = ({ data, location }) => {
  const queryPost = data.query
  const title = queryPost.frontmatter.title
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
        className="query-post"
        dangerouslySetInnerHTML={{ __html: queryPost.html }}
      />
    </Layout>
  )
}

export const query = graphql`
  query QueryPostBySlug($slug: String!) {
    query: markdownRemark(
      frontmatter: { template: { eq: "query" }, slug: { eq: $slug } }
    ) {
      html
      frontmatter {
        title
      }
    }
  }
`

export default QueryTemplate
