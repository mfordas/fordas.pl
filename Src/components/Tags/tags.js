import React from "react"
import PropTypes from "prop-types"
// Components
import { Link, graphql } from "gatsby"

import BlogPostsGridTemplate from '../BlogPost/blogPostsGridTemplate'
import Layout from "../layout"
import SEO from "../seo"
import "./tags.scss"

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} wpis${
    totalCount === 1 ? "" : "y"
  } pod tagiem "#${tag}"`
  return (
    <Layout>
    <SEO title={`#${tag}`} />
    <div className="tagContainer">
      <h2>#{tag}</h2>
      <BlogPostsGridTemplate data={data} />
      <Link to="/tags"><h3>Wszystkie tagi</h3></Link>
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
              tags: PropTypes.array.isRequired,
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