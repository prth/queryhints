import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import UseCases from "../components/UseCases/UseCases"

const DbTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <h2>{data.db.frontmatter.title}</h2>
      <UseCases queries={data.queries.edges} />
    </Layout>
  )
}

export const query = graphql`
  query DbBySlug($slug: String!) {
    queries: allMarkdownRemark(
      filter: {
        frontmatter: { template: { eq: "query" }, dbs: { in: [$slug] } }
      }
      sort: { order: ASC, fields: [frontmatter___order___list] }
    ) {
      edges {
        node {
          frontmatter {
            tags
            title
          }
        }
      }
    }
    db: markdownRemark(
      frontmatter: { template: { eq: "db" }, slug: { eq: $slug } }
    ) {
      frontmatter {
        title
      }
    }
  }
`

export default DbTemplate