import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>&copy; {currentYear} Trae CPA. All rights reserved.</p>
        <div className={styles.links}>
          <a href="mailto:info@traecpa.com">info@traecpa.com</a>
          <span className={styles.separator}>|</span>
          <a href="tel:+14155550123">(415) 555-0123</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;