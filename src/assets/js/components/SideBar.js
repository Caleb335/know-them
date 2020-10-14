import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { resources, about } from "../../../Routes/routes"
import Button from "../components/Buttons"

const Ul = styled.ul`
  display: flex;
  list-style: none;
  flex-flow: row nowrap;
  z-index: 10;

  @media screen and (max-width: 576px) {
    flex-direction: column;
    background-color: #ac0e0e;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    min-height: 100vh;
    justify-content: center;
    width: 70%;
    padding-top: 1rem;
    transition: transform 0.3s ease-in-out;

    li {
      font-size: 30px;
      margin-top: 3%;
      text-align: center;
      animation: 3s slideIn linear;
      animation-delay: 2s;
    }

    Button {
      background: #000;
      color: #fff;
      margin-left: -4%;
    }
  }
`

const SideBar = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <Link className='link__text__white' to={about}>
          About
        </Link>
      </li>
      <li>
        <Link className='link__text__white' to="#">Info</Link>
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
    </Ul>
  )
}

export default SideBar
