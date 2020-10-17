import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Hamburger from "./Burger"
import { home } from "../../../Routes/routes"
import Button from "../components/Buttons"

const Nav = styled.nav`
  background: #000000;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  position: fixed;
  width: 100%;
  z-index: 4;

  h1 {
    padding-top: 12px;
  }

  nav ul {
  }

  Button {
    margin-top: 15px;
    margin-left: 20px;
  }

  li {
    list-style-type: none;
    line-height: 36px;
    font-size: 24px;
    margin: 15px;
    display: flex;
  }

  @media only screen and (max-width: 576px) {
    padding: 0 35px 35px;
    padding-bottom: 15px;

    nav li {
      display: none;
    }

    .brand {
      display: flex;
      justify-content: center;
    }
  }
`

const Navbar = () => {
  return (
    <div>
      <Nav>
        <div className='brand'>
          <h1>
            <Link to={home} className='link__text__white'>
              #ENDSARS
            </Link>
          </h1>
        </div>
        <Hamburger />
      </Nav>
    </div>
  )
}

export default Navbar
