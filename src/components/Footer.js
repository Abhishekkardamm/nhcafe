import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-body-tertiary text-black text-center py-3">
      © {year} nhcafe
    </footer>
  );
};

export default Footer;
