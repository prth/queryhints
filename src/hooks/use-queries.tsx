import { useStaticQuery, graphql } from "gatsby"

export const useQueries = () => {
  const { queries } = useStaticQuery(
    graphql`
      query {
        queries: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "query" } } }
          sort: { order: ASC, fields: [frontmatter___order___list] }
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                sql
              }
            }
          }
        }
      }
    `
  )

  return queries
}
