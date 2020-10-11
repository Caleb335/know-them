import React from 'react'
import Navbar from "../components/Navbar"
import Search from "../components/Search"
import SearchBox from "../components/SearchBox"

const Resources = () => {

  return (<>
    <Navbar/>
    <div style={{padding: 20}}>
      <SearchBox placeholder="Search"/>
    </div>
  </>)
}

export default Resources