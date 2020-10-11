import React from "react"

const Card = ({ mediaSrc, mediaType, contentLink }) => {
  const cardStyle = {
    height: 40,
    width: 40,
    background: "#F6F6F6",
  }
  return (
    <a href={contentLink}>
      <div style={cardStyle}></div>
    </a>
  )
}

export default Card
