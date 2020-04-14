import React from "react"
import { Link, graphql } from "gatsby"
import { Button } from 'antd';
import { DatabaseOutlined } from '@ant-design/icons';

import Layout from "../components/layout"
import SEO from "../components/seo"
import UseCases from "../components/UseCases/UseCases"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <div style={{
        marginBottom: '20px'
      }}>
        {data.dbs.edges &&
          data.dbs.edges.map((db, dbIndex) => (
            <Link to={db.node.frontmatter.slug}
              style={{
                marginRight: '10px'
              }}>
              <Button type="dashed" icon={<DatabaseOutlined />}>
                {db.node.frontmatter.title}
              </Button>
            </Link>
          ))}
      </div>

      <UseCases queries={data.useCases.edges} db={data.defaultDb} />
    </Layout>
  )
}

export const query = graphql`
  query {
    useCases: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "query" }, dbs: { in: ["mongodb"] } } }
      sort: { order: ASC, fields: [frontmatter___order___list] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            tags
            title
            mongodb
          }
        }
      }
    }
    dbs: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "db" } } }
      sort: { order: ASC, fields: [frontmatter___order___list] }
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
    defaultDb: markdownRemark(
      frontmatter: { template: { eq: "db" }, slug: { eq: "mongodb" } }
    ) {
      frontmatter {
        slug
        prismLanguage
      }
    }
  }
`

export default IndexPage
