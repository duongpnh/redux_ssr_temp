import React from 'react'
import { Link } from 'react-router-dom'

const Posts = (props) => (
  <React.Fragment>
    {props.data.map(post => (
        <h1 key={post.id} style={{lineHeight: 1.25}}>
          <Link to={`/posts/${post.id}`}>
          {post.title}
          </Link>
        </h1>
    ))}
  </React.Fragment>
)

export default Posts
