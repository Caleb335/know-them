import React from "react"
import Button from "../components/Buttons"

import { support } from "../data"

const Support = () => {
  return (
    <div className='support'>
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
                {supportType.action}
              </Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Support
