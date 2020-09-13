const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) =>  {
    const { createPage } = boundActionCreators;

    const postTemplate = path.resolve('src/components/BlogPost/blogPostTemplate.js');

    return graphql(`
    {
        allMarkdownRemark {
            edges {
              node {
                  html
                  id
                frontmatter {
                  path
                  hashtag
                  date
                  author
                  title
                }
                excerpt
              }
            }
          }
    }
    `).then(res => {
        if (res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach( ({ node }) =>  {
            createPage ({
                path: node.frontmatter.path,
                component: postTemplate
            })
        }
        )
    })
};