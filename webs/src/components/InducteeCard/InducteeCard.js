import React, {useState} from "react"
import { Card, Row, Col } from 'react-bootstrap';
import { GatsbyImage } from 'gatsby-plugin-image'
import * as styles from './inducteecard.module.scss'

const InducteeCard = (props) => {
    const [hoverDirection, setHoverDirection] = useState('');

    const getHoverDirection = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const w = rect.width;
        const h = rect.height;

        // Calculate the direction of the mouse relative to the center of the card.
        const dir = Math.round(Math.atan2(y - h / 2, x - w / 2) / (Math.PI / 2) + 4) % 4; 

        return dir;
    }
    
    const handleMouseEnter = (e) => {
        const dir = getHoverDirection(e);

        switch (dir) {
            case 0:
              setHoverDirection(styles.hoverLeft);
              break;
            case 1:
              setHoverDirection(styles.hoverBottom);
              break;
            case 2:
              setHoverDirection(styles.hoverRight);
              break;
            case 3:
              setHoverDirection(styles.hoverTop);
              break;
            default:
              setHoverDirection('');
        }
    };

    

    const handleMouseLeave = (e) => {
        let dir = getHoverDirection(e);

        switch (dir) {
            case 0:
              setHoverDirection(styles.hoverLeftExit);
              break;
            case 1:
              setHoverDirection(styles.hoverBottomExit);
              break;
            case 2:
              setHoverDirection(styles.hoverRightExit);
              break;
            case 3:
              setHoverDirection(styles.hoverTopExit);
              break;
            default:
              setHoverDirection('');
        }
    };
    
    return (
        <Card className={`${styles.inducteeCard} ${hoverDirection} ${props.className}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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