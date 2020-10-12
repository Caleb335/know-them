import React from "react"
import { Slide } from "react-slideshow-image"

const Carousel = () => {
  const fadeAnime = {
    duration: 3000,
    pauseOnHover: true,
  }

  const images = [
    {
      id: 0,
      src: "./src/assets/images/9ja-wave.jpeg",
    },
    {
      id: 1,
      src: "./src/assets/images/dude-waving.jpeg",
    },
    {
      id: 2,
      src: "./src/assets/images/obafemi.jpeg",
    },
    {
      id: 3,
      src: "./src/assets/images/man-cuffed.jpeg",
    },
    {
      id: 4,
      src: "./src/assets/images/man-lying.jpeg",
    },
    {
      id: 5,
      src: "./src/assets/images/police.jpeg",
    },
    {
      id: 6,
      src: "./src/assets/images/unadey.jpeg",
    },
  ]
  

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
