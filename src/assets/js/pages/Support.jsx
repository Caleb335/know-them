import React from "react"
import Button from "../components/Buttons"

import { support } from "../data"

const Support = () => {
  return (
    <div className='support'>
      <h2>Support the #ENDSARS movement</h2>
      <p>Here are a few things you can do to support the movement.</p>
      {support.map(supportType => {
        return (
          <div key={supportType.id} className='support-type'>
            <img src={supportType.icon} />
            <div className='support-details'>
              <h1>{supportType.title}</h1>
              <p>{supportType.details}</p>
              <Button className='btn btn-primary'>{supportType.action}</Button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Support
