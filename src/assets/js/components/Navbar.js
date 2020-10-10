import React from "react"

import Button from "./Buttons"

const Navbar = () => {
  return (
    <header>
      <h1>#ENDSARS</h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Info</li>
          <li>Resources</li>
          <li>Support</li>
          <Button className='btn btn-primary'>Donate</Button>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
