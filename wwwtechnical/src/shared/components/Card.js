import React from 'react'

const Card = (props) => {
  const data = props.data
  return (
  <>
    <p style={{padding: "1rem", display: "block"}}>
    {data.title}
    </p>
  </>
  )
}

export default Card
