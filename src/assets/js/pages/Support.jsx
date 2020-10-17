import React from "react"
import Button from "../components/Buttons"
import { Link } from "react-router-dom"

import { support } from "../data"

const Support = ({ id }) => {
  return (
    <section className='support' id={id}>
      <h2 data-aos='fade'>Support the #ENDSARS movement</h2>
      <p data-aos='fade-right'>
        Here are a few things you can do to support the movement.
      </p>
      {support.map(supportType => {
        return (
          <div key={supportType.id} className='support-type'>
            <img src={supportType.icon} data-aos='fade-left' className='svg' />
            <div className='support-details'>
              <h1 data-aos='fade-right'>{supportType.title}</h1>
              <p data-aos='fade-right'>{supportType.details}</p>
              <Button anime='fade' className='btn btn-primary btn-50'>
                <a
                  className='link__text__white'
                  target='__blank'
                  href={supportType.location}
                >
                  {supportType.action}
                </a>
              </Button>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default Support
