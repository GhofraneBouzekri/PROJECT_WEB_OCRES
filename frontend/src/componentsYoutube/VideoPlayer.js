import React from "react";
import './Search.css';

const VideoPlayer = ({ videoId }) => {
    if (!videoId) {
        return (

            <p style={{ textAlign: "center", fontSize: "18px", fontWeight: "bold", color: "black" }}>
                Cliquez sur une vidéo
            </p>
        );
    }
    console.log(videoId);

    return (
        <div >
            <iframe
                id= 'ytbplayer'
                className='video-iframe'
                title={videoId}


                src={`https://wwww.youtube.com/embed/${videoId}`} />
        </div>
    );
};

export default VideoPlayer;




