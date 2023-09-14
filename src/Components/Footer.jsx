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
          <FaInstagram size={32} color="#C13584" /> {/* Instagram color */}
        </a>
        <a
          href="https://www.facebook.com/mamta.chandna.31"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaFacebook size={32} color="#1877F2" /> {/* Facebook color */}
        </a>
        <a
          href="https://www.youtube.com/@Mamta.Chawla/featured"
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaYoutube size={32} color="#FF0000" /> {/* YouTube color */}
        </a>
        <a
          href="mailto:mamtachawla699@gmail.com"  // Replace with your Gmail address
          target="_blank"
          rel="noopener noreferrer"
          style={socialIconStyle}
        >
          <FaEnvelope size={32} color="#FF0000" /> {/* Gmail color */}
        </a>
      </div>
    </footer>
  );
};

// Define styles
const footerStyle = {
  background: '#ADD8E6', // Set the background color to light blue
  textAlign: 'center',
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const socialIconStyle = {
  margin: '0 10px',
  textDecoration: 'none',
};

export default Footer;
