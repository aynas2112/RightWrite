import React from 'react';
import { FaInstagram, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import TermsOfService from './TermsOfService';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={{ ...socialIconsContainer, justifyContent: 'center' }}>
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

        <div style={buttonContainerStyle}>
          <Link to="/terms" style={buttonStyle}>
            Terms of Service
            
          </Link>
          <Link to="/disclaimer" style={buttonStyle}>
            Disclaimer
          </Link>
          <Link to="/privacy" style={buttonStyle}>
            Privacy Policy
          </Link>
        </div>
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
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap', // Allow items to wrap to the next line on smaller screens
};

const socialIconsContainer = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center', // Center icons horizontally
  gap: '10px',
  marginLeft: '50%', // Increase margin for spacing
};

const socialIconStyle = {
  margin: '10px', // Increase margin for spacing
  textDecoration: 'none',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
};

const buttonStyle = {
  color: '#555',
  textDecoration: 'none',
  fontSize: '14px',
  cursor: 'pointer',
};

export default Footer;
