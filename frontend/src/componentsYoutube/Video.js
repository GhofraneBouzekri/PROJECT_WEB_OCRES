import React from "react";
import './Search.css';

function selectVideo(videoIdObj, onVideoSelected) {
    onVideoSelected(videoIdObj.videoId);
}

function getCss(imageur1) {
    const _styles = {
        backgroundImage: `url(${imageur1})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "180px",

    };
    return _styles;
}

function constructVideoTitles(videoData, onVideoSelected) {
    return videoData.map(({ snippet, id }, index) => {
        return (
            <div
                className="video"
                key={index}
                onClick={() => selectVideo(id, onVideoSelected)}>
                <div style={getCss(snippet.thumbnails.high.url)} key={index}>
                    <p className="title"> {snippet.title}</p>
                </div>

            </div>
        );
    });
}

const Video = ({ data, onVideoSelected }) => {
    return <>{constructVideoTitles(data, onVideoSelected)}</>
}

export default Video;




