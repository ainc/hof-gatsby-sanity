import React from 'react'
import PropTypes from 'prop-types'
import './title.scss'
const Title = (props) => {
    return (
      <h2 {...props} className={`title ${props.className}`}>
        {props.children}
        <StaticImage className='titleImage'
          width={53.6}
          height={60}
          alt="Awesome Inc Logo"
          src='../images/Logo_Square.png'
        />
        <StaticImage className='titleImage'
          width={60}
          height={60}
          alt="Founders Logo"
          src='../images/founders_logo.png'
        />
      </h2>
    )
}
  
Title.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
    ])
}

export default Title;