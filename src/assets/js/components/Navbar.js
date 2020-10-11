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
          <li>
            <Link className='link__text__white'>About</Link>
          </li>
          <li>
            <Link className='link__text__white'>Info</Link>
          </li>
          <li>
            <Link className='link__text__white' to={resources}>
              Resources
            </Link>
          </li>
          <li>
            <Link className='link__text__white'>Support</Link>
          </li>
          <Button className='btn btn-primary'>Donate</Button>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
