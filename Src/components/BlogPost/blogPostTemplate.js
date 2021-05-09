import React from 'react'
import { graphql, Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

import Layout from '../layout'
import SEO from '../seo';
import Image from '../UniversalComponents/image'
import './blogPostTemplate.scss'

const BlogPostTemplate = ({ data }) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.frontmatter.short} image={{src: post.frontmatter.pic, width: 800, height: 800}}/>
        <div className="blogPostContainer">
            <h2>{post.frontmatter.title}</h2>
            <h4>Dodane przez {post.frontmatter.author}</h4>
            <h5 className="tagsContainer">{post.frontmatter.tags.map((tag, index) => <Link key={index} to={`/tags/${kebabCase(tag)}/`}>#{tag}</Link>)}</h5>
            <h6>{post.frontmatter.date}</h6>
            <Image alt="Main post image" filename={post.frontmatter.pic} />
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <Link className="backButton" to="/blog">Powrót</Link>
        </div>
        </Layout>
    )
}

export const postQuery = graphql`
    query blogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            id
            frontmatter {
                path
                title
                author
                date
                pic
                tags
                short
            }
        }
    }
`

export default BlogPostTemplate;