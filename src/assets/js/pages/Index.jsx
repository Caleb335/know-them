import React from "react"
import Navbar from "../components/Navbar"
import Button from "../components/Buttons"
import About from "../components/About"
import SearchBox from "../components/SearchBox"
import Carousel from "../components/Carousel"

const Index = () => {
  return (
    <div className='app__base'>
      <Navbar />
      <section id='home'>
        <Carousel />
        <SearchBox placeholder='Search' />
        <section className='call-to-action' id='cta'>
          <h1>#ENDSARS</h1>
          <div className='details'>
            <p>
              Nigerian Youth are mobilizing and protesting against the rampant
              brutality and harassment of the Special Anti-Robbery Squad in
              Nigeria. Here’s how you can help.
            </p>
            <p>Donate. Share. Tweet.</p>
            <Button className='btn btn-primary' data-aos='zoom-in'>
              Donate
            </Button>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Index
