import React from "react"
import { graphql, Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(post => 
    <div key={post.node.id}>
        <h3>{post.node.frontmatter.title}</h3>
        <div>{post.node.excerpt}</div>
        <small>Posted by { post.node.frontmatter.author}</small>
        <br />
        <br />
        <Link to={post.node.frontmatter.path}>Read more</Link>
        <hr />
        <br />
    </div>)}
  </Layout>
)

export const data = graphql
    `query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
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
}`



export default BlogPage
