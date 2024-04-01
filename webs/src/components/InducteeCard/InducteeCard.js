import React, {useState} from "react"
import { Card, Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './inducteecard.module.scss'

const InducteeCard = (props) => {
    
    return (
    <Card className={styles.inducteeCard}>
        <div className={styles.imageContainer}>
            <GatsbyImage image={props.img} alt={props.name} />
            <a href={props.link} className={styles.cardOverlay}>
                <Row>
                    <Col>
                        <span className={styles.name}>{props.name} <br />
                            <span className={styles.company}>{props.company}</span>
                        </span>
                    <span class="view-bio">
                         <i className='icon-eye-open'></i> View Bio
                    </span>
                    </Col>
                </Row>
            </a>
        </div>
    </Card>
    )
}

export default InducteeCard;