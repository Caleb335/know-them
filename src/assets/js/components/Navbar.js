import React from "react"
import { Link } from "react-router-dom"
import { resources } from "../../../Routes/routes"

import Button from "./Buttons"

const Navbar = () => {
  return (
    <header>
      <h1>#ENDSARS</h1>
      <nav>
        <ul>
          <li>About</li>
          <li>Info</li>
          <li><Link to={resources}>Resources</Link></li>
          <li>Support</li>
          <Button className='btn btn-primary'>Donate</Button>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
