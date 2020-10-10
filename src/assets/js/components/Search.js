import React from 'react'
import PropTypes from "prop-types"

const Search = ({ className, id, event, placeholder }) => {
    return (
        <input className={className} id={id} onChange={event} placeholder={placeholder}/>
    )
}

export default Search

Search.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    event: PropTypes.func,
    placeholder: PropTypes.string
}