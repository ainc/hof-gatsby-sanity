import React from 'react'
import PropTypes from 'prop-types'
import './title.scss'
const Title = (props) => {
    return (
      <h2 {...props} className={`title ${props.className}`}>
        
        {props.children}

      </h2>
    )
}
  
Title.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
    ])
}

export default Title;