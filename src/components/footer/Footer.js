import React from 'react';

const Footer = ({ emoji, isDark }) => {
  return (
    <footer className={isDark ? 'dark' : 'light'}>
      <span>{emoji} Footer Content</span>
    </footer>
  );
};

export default Footer;
