import React from "react"
import PropTypes from "prop-types"

const Search = ({ className, id, event, placeholder }) => {
  const [search, setSearch] = React.useState("")

  const handleSearch = event => {
    setSearch(event.target.value)
  }

  return (
    <div className='search__base'>
      <i className='fas fa-search'></i>
      <input
        className={className}
        id={id}
        onChange={event}
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
      />
    </div>
  )
}

export default Search

Search.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  event: PropTypes.func,
  placeholder: PropTypes.string,
}
