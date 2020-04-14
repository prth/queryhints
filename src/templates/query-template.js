import React from "react"
import { graphql } from "gatsby"
import { Tag } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';
import Prism from "prismjs"

import Layout from "../components/layout"
import SEO from "../components/seo"

class QueryTemplate extends React.Component {
  componentDidMount() {
    // You can call the Prism.js API here
    // Use setTimeout to push onto callback queue so it runs after the DOM is updated
    setTimeout(() => Prism.highlightAll(), 0)
  }

  render() {
    const { data } = this.props;

    const dbLanguagesMap = {};
    for (let db of data.dbs.edges) {
      dbLanguagesMap[db.node.frontmatter.slug] = db.node.frontmatter.prismLanguage;
    }

    return (
      <Layout>
        <SEO title="Home" />

        <div
          className="useCaseQuery"
          style={{
            marginBottom: "40px"
          }}
        >
          <div style={{
            fontSize: '18px',
            color: '#0a0a0a',
            marginBottom: '4px'
          }}>
            <CaretRightFilled style={{ color: '#08c' }} />
            {data.query.frontmatter.title}
          </div>
          <div style={{
            marginBottom: "10px"
          }}>
            {data.query.frontmatter.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex}>{tag}</Tag>
            ))}
          </div>
          {data.query.frontmatter.dbs.map((db, dbIndex) => (
            <pre className={`language-${dbLanguagesMap[db]}`} key={dbIndex}>
              <code className={`language-${dbLanguagesMap[db]}`}>
                {data.query.frontmatter[db].trim()}
              </code>
            </pre>
          ))}
        </div>

      </Layout>
    )
  }
}

export const query = graphql`
  query QueryBySlug($slug: String!) {
    query: markdownRemark(
      frontmatter: { template: { eq: "query" }, slug: { eq: $slug } }
    ) {
      frontmatter {
        tags
        title
        dbs
        mongodb
        mysql
        postgres
      }
    }
    dbs: allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "db" } } }
    ) {
      edges {
        node {
          frontmatter {
            slug
            prismLanguage
          }
        }
      }
    }
  }
`

export default QueryTemplate
