import React, {useState} from "react"
import { StaticImage } from "gatsby-plugin-image";
import { Container, Row, Col} from 'react-bootstrap';
import * as styles from './video.module.scss'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from "react-bootstrap";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import img from "../../images/founders_logo.png"
import playButtonImage from "../../images/founders_logo.png"

const Video = ( props ) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className={styles.box}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.imageWrapper}>
                <Button variant="light" onClick={handleShow}>
                    <GatsbyImage image={props.preview.asset.gatsbyImageData} alt={props.title} />
                    <img src={playButtonImage} alt="Play button" className={styles.playButton} />
                </Button>
            </div>
            
      <Modal show={show} onHide={handleClose} size="xl" centered="true">
        <Modal.Body>
            <iframe
                src={props.link} style={{width:"95%", height:"600px", marginLeft:"2.5%", marginRight:"2.5%"}}>
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                frameBorder="0"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                allowFullScreen
            </iframe>
            </Modal.Body>
      </Modal>
    </div>
       
    )
}


export default Video;