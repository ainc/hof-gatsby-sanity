import React, {useState} from "react"
import { Card, Container, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './inducteecard.module.scss'

const InducteeCard = (props) => {
    
    return (
    <Card className={styles.inducteeCard}>
        <div className={styles.imageContainer}>
            <GatsbyImage image={props.img} alt={props.name} />
            <div className={styles.cardOverlay}>
                <Row>
                    <Col>
                        <h2>{props.name}</h2>
                    </Col>
                </Row>
                <Row style={{borderBottom: '1px solid white', width: '80%'}}>
                    <Col>
                        <h4>{props.company}</h4>
                    </Col>
                </Row>
            </div>
        </div>
    </Card>
    )
}

export default InducteeCard;