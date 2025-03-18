import React from "react";
import { StaticImage } from "gatsby-plugin-image";
//import * as styles from './iconpair.module.scss';

const IconPair = (props) => {
  return (
    <div className="d-flex">
      <a
        href="https://awesomeinc.org/fellowship/"
        target="_blank"
        aria-label="Fellowship"
        rel="noreferrer"
      >
        <StaticImage
          placeholder="blurred"
          src="../../images/Logo_Square.png"
          className="mx-1"
          style={{ maxHeight: "75px", maxWidth: "50px" }}
        />
      </a>
      <a href="/founders-series" aria-label="Founders Series">
        <StaticImage
          placeholder="blurred"
          src="../../images/founders_logo.png"
          className="mx-1"
        />
      </a>
    </div>
  );
};

export default IconPair;
