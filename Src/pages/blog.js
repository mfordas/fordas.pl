import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPostMiniature from '../components/BlogPost/blogPostMiniature'

import '../components/BlogPost/blog.scss'

const dateInMilisecondsCreation = (date) => {
    const arrayDate = date.split('-');
    const dateObject = new Date(arrayDate[0], arrayDate[1], arrayDate[2]);
    const dateInMiliseconds = dateObject.getTime();
    return dateInMiliseconds
}

const sortPosts = (postsArray) => {
  const sortedArray = postsArray.sort((a, b) => dateInMilisecondsCreation(b.node.frontmatter.date)-dateInMilisecondsCreation(a.node.frontmatter.date));
  return sortedArray
}

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <div className="blogContainer">
    <div className="blogPostsContainer">
    {sortPosts(data.allMarkdownRemark.edges).map(post => {
    return <BlogPostMiniature key={post.node.id} post={post} />
    }
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
