import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
        <div>
            <hr />
            <h1>{post.frontmatter.title}</h1>
            <h4>Posted by {post.frontmatter.author} on {post.frontmatter.date}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link to="/blog">Powrót</Link>
            <hr />
            <br />
        </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`

export default BlogPostTemplate;