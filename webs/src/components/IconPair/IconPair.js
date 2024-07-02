import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import InducteeCard from "../InducteeCard/InducteeCard";
import Title from "../Title/Title";
//import * as styles from './iconpair.module.scss';
import FellowshipLogo from '../../images/Logo_Square.png'
import FoundersLogo from '../../images/founders_logo.png'

const IconPair = ( props ) => {
    return(
        <div className="d-flex">
            <a href='https://awesomeinc.org/fellowship/' target="_blank">
                <StaticImage placeholder='blurred' src='../../images/Logo_Square.png'  className='mx-1' style={{maxHeight: '75px', maxWidth: '50px'}} />
            </a>
            <a href='founders-series'>
                <StaticImage placeholder='blurred' src='../../images/founders_logo.png' className='mx-1'/>
            </a>
        </div>
    )
}

export default IconPair;