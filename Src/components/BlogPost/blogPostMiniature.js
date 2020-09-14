import React from 'react'
import { Link } from 'gatsby'

import Image from '../UniversalComponents/image'
import './blogPostMiniature.scss'

const BlogPostMiniature = ( { post } ) => (
    <div key={post.node.id} className="blogPostMiniatureContainer">
        <h3>{post.node.frontmatter.title}</h3>
        <Image filename={post.node.frontmatter.pic} alt="post pic" />
        <div>{post.node.excerpt}</div>
        <small>Dodane przez <b>{post.node.frontmatter.author}</b></small>
        <br />
        <Link to={post.node.frontmatter.path} style={{textAlign:"end"}}>Czytaj więcej</Link>
    </div>
)

export default BlogPostMiniature