import React from "react";
import Slider from "react-slick";
import { StaticImage } from "gatsby-plugin-image";
import * as styles from "./RotatingImages.module.css"; // we'll create CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const RotatingImages = ({ children }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,         // smooth fading slides
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.heroWrapper}>
      <Slider {...settings} className={styles.heroSlider}>
        <div>
          <StaticImage
            src="../images/HOF_2025-247.jpg"
            alt="Speaker addressing the crowd at the Hall of Fame induction ceremony"
            className={styles.heroImage}
          />
        </div>
        <div>
          <StaticImage
            src="../images/HOF_2025-264.jpg"
            alt="Speaker at the podium beside the Hall of Fame presentation screen"
            className={styles.heroImage}
          />
        </div>
        <div>
          <StaticImage
            src="../images/HOF_2025-273.jpg"
            alt="Hall of Fame inductees applauding on stage"
            className={styles.heroImage}
          />
        </div>
      </Slider>

      {/* Overlayed content */}
      <div className={styles.overlayContent}>
        {children}
      </div>
    </div>
  );
};

export default RotatingImages;
