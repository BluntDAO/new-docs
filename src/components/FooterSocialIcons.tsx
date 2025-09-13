import React from 'react';
import styles from './FooterSocialIcons.module.css';

const FooterSocialIcons: React.FC = () => {
  const socialLinks = [
    {
      icon: "/icons/icon-links.svg",
      url: "https://bento.me/blunt",
      label: "All Links"
    },
    {
      icon: "/icons/twitter.svg",
      url: "https://x.com/bluntdao",
      label: "X (Twitter)"
    },
    {
      icon: "/icons/discord.svg",
      url: "https://discord.com/invite/e3cGSTzyWp",
      label: "Discord"
    },
    {
      icon: "/icons/telegram.svg",
      url: "https://t.me/+t2nnbUov1sRhMTgx",
      label: "Telegram"
    },
    {
      icon: "/icons/instagram-brands.svg",
      url: "https://www.instagram.com/bluntdao/",
      label: "Instagram"
    },
    {
      icon: "/icons/github-brands.svg",
      url: "https://github.com/BluntDAO/",
      label: "GitHub"
    },
    {
      icon: "/icons/linkedin-brands.svg",
      url: "https://www.linkedin.com/company/bluntdao/",
      label: "LinkedIn"
    },
    {
      icon: "/icons/medium.svg",
      url: "http://medium.com/@bluntdao",
      label: "Medium"
    },
  ];

  return (
    <div className={styles.socialIcons}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label={link.label}
        >
          <img src={link.icon} alt={link.label} className={styles.icon} />
        </a>
      ))}
    </div>
  );
};

export default FooterSocialIcons;
