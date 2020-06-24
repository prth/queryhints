import { useStaticQuery, graphql } from "gatsby"

export const useDatabases = () => {
  const { databases } = useStaticQuery(
    graphql`
      query {
        databases: allMarkdownRemark(
          filter: { frontmatter: { template: { eq: "database" } } }
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
      }
    `
  )

  return databases
}
