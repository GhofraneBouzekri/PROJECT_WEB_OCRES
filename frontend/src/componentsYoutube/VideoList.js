import Video from "./Video";
import './Search.css';

const VideoList = ({ data, onVideoSelected }) => {
    return (

        <div>
            <div className="video-list">
                <Video data={data} onVideoSelected={onVideoSelected} />
            </div>
        </div>
    );
};

export default VideoList;




