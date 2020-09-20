import React from "react"
import { graphql } from 'gatsby'

import BlogPostsGridTemplate from '../components/BlogPost/blogPostsGridTemplate'
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
 <BlogPostsGridTemplate data={data} />
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
                tags
                date
                author
                title
                pic
                short
              }
              excerpt
            }
          }
        }
}`



export default BlogPage
