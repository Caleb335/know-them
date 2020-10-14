import React, { useState } from "react"
import styled from "styled-components"
import SideBar from "./SideBar"

const Burger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 20;
  display: none;

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  div {
    width: 2.3rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "#000" : " #ac0e0e")};
    border-radius: 8px;
    transition: all 0.3s linear;
    transform-origin: 1px;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const Hamburger = () => {
  const [open, isNavOpen] = useState(false)

  return (
    <div>
      <Burger open={open} onClick={() => isNavOpen(!open)}>
        <div />
        <div />
        <div />
      </Burger>
      <SideBar open={open} />
    </div>
  )
}

export default Hamburger
