import React from 'react'
import PropTypes from 'prop-types'
import './body.scss'
const Body = (props) => {
    return (
      <p {...props} className={`body ${props.className}`}>
        {props.children}
      </p>
    )
}
  
Body.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
    ])
}

export default Body;