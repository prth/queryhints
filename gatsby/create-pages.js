"use strict"

const path = require("path")
const _ = require("lodash")

const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Posts and pages from markdown
  const result = await graphql(`
    query {
      allMarkdownRemark(filter: { frontmatter: { template: { eq: "db" } } }) {
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

  _.each(edges, edge => {
    if (_.get(edge, "node.frontmatter.template") === "db") {
      createPage({
        path: edge.node.frontmatter.slug,
        component: path.resolve("./src/templates/db-template.js"),
        context: { slug: edge.node.frontmatter.slug },
      })
    }
  })
}

module.exports = createPages
