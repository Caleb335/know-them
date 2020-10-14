import React from "react"
import Navbar from "../components/Navbar"
import SearchBox from "../components/SearchBox"

const Resources = () => {
  return (
    <div className='resources'>
      <Navbar />
      <div style={{ padding: 20 }}>
        <SearchBox placeholder='Search' />
      </div>
    </div>
  )
}

export default Resources
