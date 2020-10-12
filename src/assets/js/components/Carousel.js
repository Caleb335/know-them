import React from "react"
import { Slide } from "react-slideshow-image"

import { images } from "../data"

const Carousel = () => {
  const fadeAnime = {
    duration: 3000,
    pauseOnHover: true,
  }

  return (
    <div className='slide-show'>
      <Slide {...fadeAnime}>
        {images.map(image => {
          return (
            <div key={image.id}>
              <img
                src={image.src}
                className='slide__image'
                style={{ width: "100%" }}
              />
            </div>
          )
        })}
      </Slide>
    </div>
  )
}

export default Carousel
