import React from 'react'
import Posts from '../components/Posts'

const Post = (props) => {
  console.log('POST',__isBrowser__)
  const posts = props.staticContext.data
  return (
    <Posts data={posts}/>
  )
}

export default Post
