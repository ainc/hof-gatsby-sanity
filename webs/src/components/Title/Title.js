import React from 'react'
import PropTypes from 'prop-types'
import './title.scss'
import {  StaticImage } from 'gatsby-plugin-image'
const Title = (props) => {
    return (
      <h2 {...props} className={`title ${props.className}`}>
        {props.children}
        <a href="http://fellowship.awesomeinc.org/">
        <StaticImage className='aincImage'
          alt="Awesome Inc Logo"
          src='../images/Logo_Square.png'
        />
        </a>
        <a href="/founders-series">
        <StaticImage className='founderImage'
          width={60}
          height={60}
          alt="Founders Logo"
          src='../images/founders_logo.png'
        />
        </a>
      </h2>
    )
}
  
Title.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.node,
    ])
}

export default Title;