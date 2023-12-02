// TermsOfService.jsx

import React from 'react';

const TermsOfService = () => {
  const termsStyle = {
    maxWidth: '600px', // Adjust the maximum width as needed
    margin: 'auto', // Center the component horizontally
    padding: '20px', // Add some padding for better readability
    textAlign: 'left', // Align text to the left
  };

  return (
    <div style={termsStyle}>
      <h2 style={{textAlign:'center'}}>Terms of Service</h2>

      <p>
        By using our services, you agree to comply with and be bound by the following terms and conditions. Please read these terms carefully before using our website.
      </p>

      <h3>1. Acceptance of Terms</h3>

      <p>
        By accessing or using our services, you agree to be bound by these terms. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
      </p>

      <h3>2. User Responsibilities</h3>

      <p>
        Users are responsible for maintaining the confidentiality of their account and password. You agree to accept responsibility for all activities that occur under your account.
      </p>

      <h3>3. Prohibited Activities</h3>

      <p>
        Users agree not to engage in any prohibited activities, including but not limited to hacking, data mining, or any activity that could damage, disable, overburden, or impair our services.
      </p>

      <h3>4. Intellectual Property</h3>

      <p>
        The content of our services, including text, graphics, logos, and images, is the property of Scriptologic and is protected by copyright and other intellectual property laws.
      </p>

      <h3>5. Disclaimer</h3>

      <p>
        Scriptologic provides the services "as is" without any warranty of any kind. We do not guarantee the accuracy, completeness, or timeliness of the information provided.
      </p>
    </div>
  );
};

export default TermsOfService;
