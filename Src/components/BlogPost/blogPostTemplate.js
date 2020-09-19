import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout'
import SEO from '../seo';
import Image from '../UniversalComponents/image'
import './blogPostTemplate.scss'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.frontmatter.short} image={post.frontmatter.pic}/>
        <div className="blogPostContainer">
            <h2>{post.frontmatter.title}</h2>
            <h4>Dodane przez {post.frontmatter.author}</h4>
            <h6>{post.frontmatter.date}</h6>
            <Image alt="Main post image" filename={post.frontmatter.pic} />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link to="/blog">Powrót</Link>
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
                pic
            }
        }
    }
`

export default BlogPostTemplate;