"use strict"

const path = require("path")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const componentsMap = {
    database: path.resolve("./src/templates/database-post.tsx"),
    query: path.resolve("./src/templates/query-post.tsx"),
  }

  const result = await graphql(`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { template: { in: ["database", "query"] } } }
      ) {
        edges {
          node {
            frontmatter {
              template
              slug
            }
          }
        }
      }
    }
  `)

  const { edges } = result.data.allMarkdownRemark
  edges.forEach(edge => {
    createPage({
      path: edge.node.frontmatter.slug,
      component: componentsMap[edge.node.frontmatter.template],
      context: { slug: edge.node.frontmatter.slug },
    })
  })
}

module.exports = createPages
