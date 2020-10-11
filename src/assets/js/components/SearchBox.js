import React, { useState } from "react"

const SearchBox = ({ placeholder, onChange }) => {
  const searchBoxStyles = () => ({
    searchBox: {
      display: "flex",
      alignItems: "center",
      maxWidth: "80vw",
      marginRight: "auto",
      marginLeft: "auto",
      border: `1px solid ${focused ? "#f00" : "#949494"}`,
      borderRadius: 10,
      padding: "2px 10px",
    },
    input: {
      outline: "none",
      border: "none",
      flex: 1,
      height: "100%",
      padding: "10px",
      opacity: 0.45,
    },
  })

  const [search, setSearch] = useState("")
  const [focused, setFocused] = useState(false)

  const handleChange = e => {
    if (typeof onChange === "undefined") setSearch(e.target.value)
    else onChange()
  }

  const styles = searchBoxStyles()
  return (
    <div className='search-box' style={styles.searchBox}>
      <svg
        width='20'
        height='22'
        viewBox='0 0 24 26'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14.1082 16.8555C12.6803 17.7758 10.98 18.3099 9.15493 18.3099C4.0988 18.3099 0 14.2111 0 9.15493C0 4.0988 4.0988 0 9.15493 0C14.2111 0 18.3099 4.0988 18.3099 9.15493C18.3099 11.7257 17.2503 14.0489 15.544 15.7118L23.8686 24.7603L22.5211 26L14.1082 16.8555ZM16.662 9.24649C16.662 13.3419 13.3419 16.662 9.24649 16.662C5.15102 16.662 1.83099 13.3419 1.83099 9.24649C1.83099 5.15102 5.15102 1.83099 9.24649 1.83099C13.3419 1.83099 16.662 5.15102 16.662 9.24649Z'
          fill={focused ? "#f00" : "#949494"}
        />
      </svg>
      <input
        type='text'
        placeholder={placeholder}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        onChange={handleChange}
        style={styles.input}
        value={search}
      />
    </div>
  )
}

export default SearchBox
