import React from 'react';
import FooterSocialIcons from '../../components/FooterSocialIcons';
import styles from './styles.module.css';

export default function Footer(): JSX.Element {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.socialSection}>
          <h4>Connect with BluntDAO</h4>
          <FooterSocialIcons />
        </div>
        <div className={styles.copyright}>
          <p>Rolled with ❤️ by BluntDAO.</p>
        </div>
      </div>
    </footer>
  );
}
