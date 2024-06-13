import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col} from 'react-bootstrap';
import * as styles from './flickerimages.module.scss';

const FlickerImages = ( props ) => {
    return(
        <img src={props.img} className={styles.photo} />
    )
}


export default FlickerImages;