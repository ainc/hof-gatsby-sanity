import React from "react"
import * as styles from './flickerimages.module.scss';

const FlickerImages = ( props ) => {
    return(
        <img src={props.img} className={styles.photo} alt=' '/>
    )
}


export default FlickerImages;