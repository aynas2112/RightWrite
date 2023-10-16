import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <a
          href="https://www.instagram.com/scriptlogic1/"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaInstagram size={32} color="#C13584" />
        </a>
        <a
          href="https://www.facebook.com/mamta.chandna.31"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaFacebook size={32} color="#1877F2" />
        </a>
        <a
          href="https://www.youtube.com/@Mamta.Chawla/featured"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaYoutube size={32} color="#FF0000" />
        </a>
        <a
          href="mailto:mamtachawla699@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaEnvelope size={32} color="#FF0000" />
        </a>
      </div>
    </footer>
  );
};

// Define styles
const footerStyle = {
  background: '#ADD8E6',
  textAlign: 'center',
  padding: '10px', // Add padding for spacing
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
};

const socialIconStyle = {
  margin: '10px', // Increase margin for spacing
  textDecoration: 'none',
};

export default Footer;
