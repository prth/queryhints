import React from "react"
import { graphql } from "gatsby"
import { Tag } from 'antd';
import { CaretRightFilled } from '@ant-design/icons';

import Layout from "../components/layout"
import SEO from "../components/seo"
import QueryViewer from "../components/Query/QueryViewer"

class QueryTemplate extends React.Component {
  render() {
    const { data } = this.props;

    const dbLanguagesMap = {};
    for (let db of data.dbs.edges) {
      dbLanguagesMap[db.node.frontmatter.slug] = db.node.frontmatter.queryViewerLanguage;
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
            <div style={{
              marginBottom: "40px"
            }}>
              <QueryViewer
                language={dbLanguagesMap[db]}
                query={data.query.frontmatter[db].trim()}
              />
            </div>
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
            queryViewerLanguage
          }
        }
      }
    }
  }
`

export default QueryTemplate
