import React from "react"
import { graphql } from "gatsby"
import { Row, Col, Typography } from 'antd';
// import { CaretRightFilled } from '@ant-design/icons';

import Layout from "../components/layout"
import SEO from "../components/seo"
import QueryViewer from "../components/Query/QueryViewer"

const { Title } = Typography;

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
            marginTop: '20px'
          }}>
            <Title level={4}>
              {data.query.frontmatter.title}
            </Title>
          </div>
          {/* <div style={{
            marginBottom: "10px"
          }}>
            {data.query.frontmatter.tags.map((tag, tagIndex) => (
              <Tag key={tagIndex}>{tag}</Tag>
            ))}
          </div> */}

          <Row gutter={[16, 24]} style={{ marginTop: "5px" }}>
            {data.query.frontmatter.dbs.map((db, dbIndex) => (
              <Col span={24}>
                <div style={{ fontSize: "18px", color: "#111" }}>
                  #{db}
                </div>
                <div>
                  <QueryViewer
                    language={dbLanguagesMap[db]}
                    clipboard={false}
                  >
                    {data.query.frontmatter[db].trim()}
                  </QueryViewer>
                </div>
              </Col>
            ))}
          </Row>
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
