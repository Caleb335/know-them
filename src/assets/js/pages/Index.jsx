import React from "react"
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import Button from "../components/Buttons"

const Index = () => {
  return (
    <div className='app__base'>
      <Navbar />
      <section id="home">
      <Search className='form__control search' placeholder='Search' />
      <section className='call-to-action' id='cta'>
        <h1>#ENDSARS</h1>
        <div className='details'>
          <p>
            Nigerian Youth are mobilizing and protesting against the rampant
            brutality and harassment of the Special Anti-Robbery Squad in
            Nigeria. Here’s how you can help.
          </p>
          <p>Donate. Share. Tweet.</p>
          <Button className='btn btn-primary'>Donate</Button>
        </div>
      </section>
      </section>
    </div>
  )
}

export default Index
