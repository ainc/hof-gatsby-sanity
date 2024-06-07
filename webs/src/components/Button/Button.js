import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'
const Button = (props) => {
    return (
      <button {...props} className={`button ${props.className}`}>
        {props.children}
      </button>
    )
}
  
Button.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
    ])
}

export default Button;