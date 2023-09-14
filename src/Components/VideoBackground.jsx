import React from 'react';
import CardWithPicture from './CardWithPicture';
import { Grid, Box } from '@mui/material';
import videoBg from './sunrise.mp4';
import logo from './logo.png';

const VideoBackground = () => {
    const titleBackgroundStyle = {
        background: 'rgba(9, 0, 80, 1)', // Color with 50% transparency
        padding: '0.5px 10px', // Adjust the padding as needed
        borderRadius: '5px', // Add rounded corners if desired
        margin: '5%'
    };

    return (
        <div className='main video-background'>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <div className="logo-container">
                    <img src={logo} alt="Logo" className="circular-logo" />
                </div>
                <div style={titleBackgroundStyle}>
                    <p className='Title'>Reveal the Unwritten Truths</p>
                </div>
            </div>
            <CardWithPicture />
        </div>
    );
};

export default VideoBackground;
