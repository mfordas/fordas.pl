import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"

import BlogPostsGridTemplate from '../BlogPost/blogPostsGridTemplate'
import Layout from "../layout"
import SEO from "../seo"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} wpis${
    totalCount === 1 ? "" : "y"
  } pod tagiem "#${tag}"`
  return (
    <Layout>
    <SEO title={`#${tag}`} />
    <div>
      <h1>{tagHeader}</h1>
      <BlogPostsGridTemplate data={data} />
      <Link to="/tags">All tags</Link>
    </div>
    </Layout>
  )
}
Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              path: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              author: PropTypes.string.isRequired,
              pic: PropTypes.string.isRequired,
              tags: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const data = graphql`
  query($tag: String) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
              }
              excerpt
        }
      }
    }
  }
`