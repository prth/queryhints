import React from "react"
import { graphql } from "gatsby"
import { Typography } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
// import UseCases from "../components/UseCases/UseCases";
import Cheatsheets from "../components/Cheatsheets/Cheatsheets"
import "./db-template.css"

const { Title } = Typography;

const DbTemplate = ({ data }) => {
  console.log('data', data);

  return (
    <Layout>
      <SEO title="Home" />

      <div style={{ textAlign: "center" }}>
        <Title level={2} underline>{data.db.frontmatter.title}</Title>
      </div>

      <div style={{ marginTop: "40px" }}>
        <Cheatsheets
          cheatsheets={data.cheatsheets.edges}
          language={data.db.frontmatter.queryViewerLanguage} />
      </div>

      {/* <div style={{
        marginTop: "32px",
        borderTop: "1px solid #ddd",
        paddingTop: "32px"
      }}>
        <UseCases queries={data.queries.edges} db={data.db} />
      </div> */}

    </Layout>
  )
}

export const query = graphql`
  query DbBySlug($slug: String!) {
    cheatsheets: allMarkdownRemark(
      filter: {
        frontmatter: { template: { eq: "cheatsheet" }, dbs: { in: [$slug] } }
      }
      sort: { order: ASC, fields: [frontmatter___order___list] }
    ) {
      edges {
        node {
          frontmatter {
            title
            content
          }
        }
      }
    }
    queries: allMarkdownRemark(
      filter: {
        frontmatter: { template: { eq: "query" }, dbs: { in: [$slug] } }
      }
      sort: { order: ASC, fields: [frontmatter___order___list] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            tags
            title
            mongodb
            mysql
            postgres
          }
        }
      }
    }
    db: markdownRemark(
      frontmatter: { template: { eq: "db" }, slug: { eq: $slug } }
    ) {
      frontmatter {
        title
        slug
        queryViewerLanguage
      }
    }
  }
`

export default DbTemplate
