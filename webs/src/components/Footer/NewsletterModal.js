import React from "react";
import { Modal } from "react-bootstrap";
import * as styles from "./footer.module.scss";

const ZOHO_NEWSLETTER_URL = "https://zfrmz.com/yDw6rGvAR3Sp8y1RzJ32";

const NewsletterModal = ({ show, onHide }) => (
  <Modal
    show={show}
    onHide={onHide}
    centered
    size="lg"
    className={styles.newsletterModal}
  >
    <Modal.Header closeButton closeVariant="white">
      <Modal.Title>Newsletter Signup</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      {show && (
        <iframe
          src={ZOHO_NEWSLETTER_URL}
          title="Kentucky Entrepreneur Hall of Fame Newsletter Subscription"
          className={styles.newsletterFrame}
        />
      )}
    </Modal.Body>
  </Modal>
);

export default NewsletterModal;
