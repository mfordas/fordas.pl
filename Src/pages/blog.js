import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostMiniature from '../components/BlogPost/blogPostMiniature'

import '../components/BlogPost/blog.scss'

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <div className="blogContainer">
    <h1>Posts</h1>
    <div className="blogPostsContainer">
    {data.allMarkdownRemark.edges.map(post => 
    <BlogPostMiniature key={post.node.id} post={post} />
    )}
    </div>
    </div>
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
                pic
              }
              excerpt
            }
          }
        }
}`



export default BlogPage
