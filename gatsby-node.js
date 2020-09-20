const _ = require("lodash")
const path = require('path');

exports.createPages = async ({
  actions,
  graphql, reporter
}) => {
  const {
    createPage
  } = actions;

  const postTemplate = path.resolve('src/components/BlogPost/blogPostTemplate.js');
  const tagTemplate = path.resolve("src/components/Tags/tags.js")

  const res = await graphql(`
    {
      postsRemark: allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 2000
        )  {
            edges {
              node {
                  html
                  id
                frontmatter {
                  path
                  tags
                  date
                  author
                  title
                }
                excerpt
              }
            }
          }
          tagsGroup: allMarkdownRemark(limit: 2000) {
            group(field: frontmatter___tags) {
              fieldValue
            }
          }
        }
    `)

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return
  };

  res.data.postsRemark.edges.forEach(({
    node
  }) => {
    createPage({
      path: node.frontmatter.path,
      component: postTemplate
    })
  })

  // Extract tag data from query
  const tags = res.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
};