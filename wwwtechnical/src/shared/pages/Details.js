import React from 'react'

class Details extends React.Component {

  constructor(props) {
    super(props)
    console.log('__isBrowser__ Details', __isBrowser__)

  }

  render() {
    const post = this.props.staticContext.data
    return (
      <div>
        <h3>{post.id}</h3>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  }
}

export default Details
