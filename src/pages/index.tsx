import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import QueryViewer from "../components/query/QueryViewer"
import { rhythm } from "../utils/typography"
import { useDatabases } from "../hooks/use-databases"
import { useQueries } from "../hooks/use-queries"

const IndexPage = ({ location }) => {
  const databases = useDatabases()
  const queries = useQueries()

  return (
    <Layout location={location}>
      <SEO />

      <div>
        <h4
          style={{
            marginBottom: rhythm(2 / 3),
          }}
        >
          # Databases
        </h4>
        <ul>
          {databases.edges &&
            databases.edges.map(db => (
              <li>
                <Link to={db.node.frontmatter.slug}>
                  {db.node.frontmatter.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div>
        <h4
          style={{
            marginBottom: rhythm(2 / 3),
          }}
        >
          # Latest Queries
        </h4>

        {queries.edges &&
          queries.edges.map(query => (
            <div
              style={{
                marginBottom: rhythm(3 / 2),
              }}
            >
              <Link
                to={query.node.frontmatter.slug}
                style={{
                  boxShadow: "none",
                  fontSize: 20,
                  lineHeight: "20px",
                }}
              >
                {query.node.frontmatter.title}
              </Link>
              <div
                style={{
                  marginTop: "4px",
                }}
              >
                <QueryViewer query={query.node.frontmatter.sql} />
              </div>
            </div>
          ))}
      </div>
    </Layout>
  )
}

export default IndexPage
