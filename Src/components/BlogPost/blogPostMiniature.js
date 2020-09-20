import React from 'react'
import { Link } from 'gatsby'
import kebabCase from "lodash/kebabCase"

import Image from '../UniversalComponents/image'
import './blogPostMiniature.scss'
import { indexOf } from 'lodash'

const BlogPostMiniature = ( { post } ) => (
    <div key={post.node.id} className="blogPostMiniatureContainer">
         <Link to={post.node.frontmatter.path}>
        <h3>{post.node.frontmatter.title}</h3>
        </Link>
        <small style={{textAlign:"end"}}>Dodane przez <b>{post.node.frontmatter.author}</b></small>
        <Link to={post.node.frontmatter.path}>
        <Image filename={post.node.frontmatter.pic} alt="post pic" />
        <div>{post.node.frontmatter.short}</div>
        </Link>
        <br />
        <div style={{textAlign:"end"}}>
        {post.node.frontmatter.tags.map((tag, index) =><Link key={index} to={`/tags/${kebabCase(tag)}/`}>{`#${tag} `}</Link>)}
        </div>
        <br />
        <br />
        <Link to={post.node.frontmatter.path} style={{textAlign:"end"}}>Czytaj więcej</Link>
    </div>
)

export default BlogPostMiniature