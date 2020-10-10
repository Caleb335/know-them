import React from "react"
import PropTypes from "prop-types"

const Button = ({ className, id, children, backgroundColor }) => {
  const styles = {
    backgroundColor,
  }

  return (
    <button className={className} id={id} style={styles.backgroundColor}>
      {children}
    </button>
  )
}

export default Button

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
}
