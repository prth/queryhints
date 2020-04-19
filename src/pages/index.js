import React from "react"
import { Link, graphql } from "gatsby"
import { Button, Typography } from 'antd';

import Layout from "../components/layout"
import SEO from "../components/seo"
import UseCases from "../components/UseCases/UseCases"
import 'antd/dist/antd.css';

const { Title } = Typography;

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />

      <div style={{
        marginTop: '30px',
        textAlign: "center"
      }}>
        <Title level={4}>~ cheatsheets ~</Title>
        {data.dbs.edges &&
          data.dbs.edges.map((db, dbIndex) => (
            <Link to={db.node.frontmatter.slug}
              style={{
                marginRight: '10px'
              }}>
              <Button type="primary">
                {db.node.frontmatter.title}
              </Button>
            </Link>
          ))}
      </div>

      <div style={{
        marginTop: '60px'
      }}>
        <UseCases queries={data.useCases.edges} db={data.defaultDb} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    useCases: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "query" }, dbs: { in: ["mysql"] } } }
      sort: { order: ASC, fields: [frontmatter___order___list] }
    ) {
      edges {
        node {
          frontmatter {
            slug
            tags
            title
            mysql
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
      frontmatter: { template: { eq: "db" }, slug: { eq: "mysql" } }
    ) {
      frontmatter {
        slug
        queryViewerLanguage
      }
    }
  }
`

export default IndexPage
