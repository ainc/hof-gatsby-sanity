import React, { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./inducteecard.module.scss";

const InducteeCard = (props) => {
  const [hoverDirection, setHoverDirection] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const getHoverDirection = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const w = rect.width;
    const h = rect.height;

    // Calculate the direction of the mouse relative to the center of the card.
    const dir =
      Math.round(Math.atan2(y - h / 2, x - w / 2) / (Math.PI / 2) + 4) % 4;

    return dir;
  };

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
        setHoverDirection("");
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
        setHoverDirection("");
    }
  };

  // Get optimized image data
  const optimizedImage = props.img ? getImage(props.img) : null;
  const altText = props.name ? `${props.name} - ${props.company || 'Kentucky Entrepreneur Hall of Fame Inductee'}` : 'Inductee Profile';

  return (
    <Card
      className={`${styles.inducteeCard} ${hoverDirection}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.imageContainer}>
        {optimizedImage ? (
          <GatsbyImage 
            image={optimizedImage} 
            alt={altText}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? styles.imageLoaded : styles.imageLoading}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderText}>No Image</div>
          </div>
        )}
        <a
          href={props.link}
          className={styles.cardOverlay}
          aria-label={`View ${props.name}'s bio`}
        >
          <Row>
            <Col>
              <span className={styles.name}>
                {props.name} <br />
                <span className={styles.company}>{props.company}</span>
              </span>
              <span className="view-bio">
                <i className="icon-eye-open" aria-label="View Bio"></i> View Bio
              </span>
            </Col>
          </Row>
        </a>
      </div>
    </Card>
  );
};

export default InducteeCard;
