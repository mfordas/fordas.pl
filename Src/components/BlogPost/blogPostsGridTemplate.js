import React from "react"

import BlogPostMiniature from './blogPostMiniature'

import './blog.scss'

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

const BlogPostsGridTemplate = ({data}) => (
    <div className="blogContainer">
    <div className="blogPostsContainer">
    {sortPosts(data.allMarkdownRemark.edges).map(post => {
    return <BlogPostMiniature key={post.node.id} post={post} />
    }
    )}
    </div>
    </div>
)

export default BlogPostsGridTemplate