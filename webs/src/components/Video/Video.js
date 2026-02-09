import React, { useState } from "react";
import * as styles from "./video.module.scss";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GatsbyImage } from "gatsby-plugin-image";
import playButtonImage from "../../images/founders_logo.png";

export const getEmbedUrl = (url) => {
  if (!url) return "";

  try {
    const parsed = new URL(url);

    // Normalize mobile domain
    if (parsed.hostname === "m.youtube.com") {
      parsed.hostname = "www.youtube.com";
    }

    // --- CASE 1: Already embed ---
    if (parsed.pathname.startsWith("/embed/")) {
      parsed.searchParams.set("autoplay", "1");
      parsed.searchParams.set("mute", "1");
      parsed.searchParams.set("rel", "0");
      return parsed.toString();
    }

    // CASE 2: Standard watch URL
    if (parsed.pathname === "/watch" && parsed.searchParams.has("v")) {
      const videoId = parsed.searchParams.get("v");
      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

      parsed.searchParams.forEach((val, key) => {
        if (key !== "v") embedUrl.searchParams.set(key, val);
      });

      embedUrl.searchParams.set("autoplay", "1");
      embedUrl.searchParams.set("mute", "1");
      embedUrl.searchParams.set("rel", "0");

      return embedUrl.toString();
    }

    // CASE 3: youtube short link
    if (parsed.hostname === "youtu.be") {
      const videoId = parsed.pathname.replace("/", "").split("?")[0];

      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

      parsed.searchParams.forEach((val, key) => {
        embedUrl.searchParams.set(key, val);
      });

      embedUrl.searchParams.set("autoplay", "1");
      embedUrl.searchParams.set("mute", "1");
      embedUrl.searchParams.set("rel", "0");

      return embedUrl.toString();
    }

    // CASE 4: youtube Shorts URL
    if (parsed.pathname.startsWith("/shorts/")) {
      const videoId = parsed.pathname.split("/shorts/")[1];

      const embedUrl = new URL(`https://www.youtube.com/embed/${videoId}`);

      embedUrl.searchParams.set("autoplay", "1");
      embedUrl.searchParams.set("mute", "1");
      embedUrl.searchParams.set("rel", "0");

      return embedUrl.toString();
    }

    // Fallback — preserve existing URL but ensure autoplay/mute/rel set
    parsed.searchParams.set("autoplay", "1");
    parsed.searchParams.set("mute", "1");
    parsed.searchParams.set("rel", "0");
    return parsed.toString();
  } catch (e) {
    return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1&rel=0`;
  }
};

const Video = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rawUrl = props.link || props.videoUrl || props.videoEmbedLink || "";
  const embedUrl = getEmbedUrl(rawUrl);

  return (
    <div className={`d-flex flex-column ${styles.box}`}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.imageWrapper}>
        <Button variant="light" onClick={handleShow}>
          <GatsbyImage
            image={props.preview?.asset?.gatsbyImageData}
            alt={props.title}
          />
          <img
            src={playButtonImage}
            alt="Play button"
            className={styles.playButton}
          />
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} size="xl" centered="true">
        <Modal.Body>
          <iframe
            src={embedUrl}
            style={{
              width: "95%",
              height: "600px",
              marginLeft: "2.5%",
              marginRight: "2.5%",
            }}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            webkitallowfullscreen="true"
            mozallowfullscreen="true"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            title="Video"
          ></iframe>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Video;
