import React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

import Image from '../UniversalComponents/image'
import './blogPostMiniature.scss'

const BlogPostMiniature = ( { post } ) => (
    <div key={post.node.id} className="blogPostMiniatureContainer">
         <Link to={post.node.frontmatter.path}>
        <h3>{post.node.frontmatter.title}</h3>
        </Link>
        <Link to={post.node.frontmatter.path}>
        <Image filename={post.node.frontmatter.pic} alt="post pic" />
        <div>{post.node.frontmatter.short}</div>
        </Link>
        <br />
        <div style={{textAlign:"end"}}>
        {post.node.frontmatter.tags.map(tag =><Link to={`/tags/${kebabCase(tag)}/`}>{`#${tag} `}</Link>)}
        </div>
        <br />
        <small style={{textAlign:"end"}}>Dodane przez <b>{post.node.frontmatter.author}</b></small>
        <br />
        <Link to={post.node.frontmatter.path} style={{textAlign:"end"}}>Czytaj więcej</Link>
    </div>
)

export default BlogPostMiniature