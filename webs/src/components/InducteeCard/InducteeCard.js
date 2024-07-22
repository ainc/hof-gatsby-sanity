import React from "react"
import { Card, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './inducteecard.module.scss'

const InducteeCard = (props) => {
    
    return (
    <Card className={styles.inducteeCard}>
        <div className={styles.imageContainer}>
            <GatsbyImage image={props.img} alt={props.name} />
            <a href={props.link} className={styles.cardOverlay} aria-label='Inductee Bio'>
                <Row>
                    <Col>
                        <span className={styles.name}>{props.name} <br />
                            <span className={styles.company}>{props.company}</span>
                        </span>
                    <span class="view-bio">
                         <i className='icon-eye-open' aria-label='View Bio'></i> View Bio
                    </span>
                    </Col>
                </Row>
            </a>
        </div>
    </Card>
    )
}

export default InducteeCard;