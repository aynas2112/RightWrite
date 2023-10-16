import React from 'react';

const AboutGraphology = () => {
  const listItemStyle = {
    marginBottom: '1%', // Add margin between list items
    color: '#090050',
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginTop: '5%', color: '#090050' }}>
        What is Graphology?
      </h2>
      <p
        style={{
          marginLeft: '5%', // Adjusted for smaller screens
          marginRight: '5%', // Adjusted for smaller screens
          marginTop: '10px',
          color: '#090050',
        }}
      >
        Graphology is the pseudoscientific study and analysis of handwriting, especially in relation to human psychology. It suggests that one's handwriting can reveal a lot about their personality, emotions, and psychological state. It's important to note that graphology is not considered a legitimate or scientifically valid field of study by the mainstream scientific community.
      </p>
      <h2 style={{ textAlign: 'center', marginTop: '2%', color: '#090050' }}>
        Benefits of Graphology
      </h2>
      <ul
        style={{
          marginLeft: '5%', // Adjusted for smaller screens
          marginRight: '5%', // Adjusted for smaller screens
          marginTop: '2.5%',
        }}
      >
        <li style={listItemStyle}>
          <span style={{ fontWeight: 'bold' }}>Personality Insight:</span> By examining handwriting traits such as size, slant, pressure, and spacing, you can get to know aspects of a person's personality, including strengths, weaknesses, and hidden talents.
        </li>
        <li style={listItemStyle}>
          <span style={{ fontWeight: 'bold' }}>Self-Discovery:</span> Handwriting analysis can be a valuable tool for self-discovery and personal growth. It helps individuals gain a better understanding of themselves, their behavior, and their emotional responses. This self-awareness can lead to personal development and improved relationships.
        </li>
        <li style={listItemStyle}>
          <span style={{ fontWeight: 'bold' }}>Career Guidance:</span> Graphology can be used for career guidance and counseling. By assessing a person's handwriting, a graphologist can offer insights into suitable career paths, work styles, and areas where an individual may excel.
        </li>
        <li style={listItemStyle}>
          <span style={{ fontWeight: 'bold' }}>Hiring and Recruitment:</span> Employers and HR professionals often use graphology during the hiring process. Analyzing the handwriting of potential candidates can help assess their compatibility with a particular job role, team dynamics, and company culture.
        </li>
        <li style={listItemStyle}>
          <span style={{ fontWeight: 'bold' }}>Forensic Analysis:</span> Graphology plays a role in forensic investigations, such as verifying the authenticity of signatures and detecting forgeries. It can also aid in criminal profiling by providing clues about a suspect's psychological profile.
        </li>
      </ul>
    </div>
  );
};

export default AboutGraphology;
