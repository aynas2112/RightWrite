import React from 'react'
import VideoBackground from '../Components/VideoBackground'
import AboutGraphology from '../Components/AboutGraphology';

const Home = () => {
    const containerStyle = {
        backgroundColor: '#ADD8E6', // Set the background color to light blue
        // height: '105%', // Increase the height by 5%
        paddingBottom:'100px'
    };

    return (
        <div style={containerStyle}>
            <VideoBackground />
            <AboutGraphology />
        </div>
    )
}

export default Home
