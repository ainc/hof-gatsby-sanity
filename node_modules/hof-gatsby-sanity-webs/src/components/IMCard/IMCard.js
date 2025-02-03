import React, { useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./imcard.module.scss";

const IMCard = (props) => {
  if (props.linkedin !== null) {
    return (
      <div className={styles.center}>
        <div className={styles.type}>{props.type}</div>
        <div className={styles.name}>{props.name}</div>
        <Card className={styles.inducteeCard}>
          <div className={`${styles.imageContainer} w-100 h-100`}>
            <GatsbyImage
              image={props.img}
              alt={props.name}
              className={styles.profilePhoto}
            />
          </div>
        </Card>
        <div className={styles.linkedin}>
          <a href={props.linkedin} className={styles.linkedint}>
            LinkedIn
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.center}>
        <div className={styles.type}>{props.type}</div>
        <div className={styles.name}>{props.name}</div>
        <Card className={styles.inducteeCard}>
          <div className={styles.imageContainer}>
            <GatsbyImage image={props.img} alt={props.name} />
          </div>
        </Card>
      </div>
    );
  }
};

export default IMCard;
