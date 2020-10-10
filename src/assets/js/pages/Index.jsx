import React from 'react'
import Navbar from '../components/Navbar'
import Search from '../components/Search'

const Index = () => {
    return (
        <div className="app__base home">
            <Navbar />
            <Search className="form__control search" placeholder="&#x1F50D; search"/>
        </div>
    )
}

export default Index