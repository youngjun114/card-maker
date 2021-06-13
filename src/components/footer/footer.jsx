import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  return (
    <footer className={styles.footer}>
      <h4>Code Your Dream</h4>
    </footer>
  );
});

export default Footer;
