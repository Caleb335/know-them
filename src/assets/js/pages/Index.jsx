import React from "react"
import Navbar from "../components/Navbar"
import Button from "../components/Buttons"
import SearchBox from "../components/SearchBox"
import Carousel from "../components/Carousel"
import Support from "./Support"

const Index = () => {
  return (
    <div className='app__base'>
      <Navbar />
      <section id='home'>
        <SearchBox placeholder='Search' />
        <Carousel />
        <section className='call-to-action' id='cta'>
          <h1 data-aos='fade-right'>#ENDSARS</h1>
          <div className='details'>
            <p data-aos='fade-left'>
              Nigerian Youth are mobilizing and protesting against the rampant
              brutality and harassment of the Special Anti-Robbery Squad in
              Nigeria. Here’s how you can help.
            </p>
            <p data-aos='fade-right'>Donate. Share. Tweet.</p>
            <Button className='btn btn-primary'>Donate</Button>
          </div>
        </section>
        <Support />
      </section>
    </div>
  )
}

export default Index
