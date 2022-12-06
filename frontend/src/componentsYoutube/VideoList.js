import Video from "./Video";
import './Search.css';

const VideoList = ({ data, onVideoSelected }) => {
    return (

        <div>
            <div className="videolist-titre">
                <h3>LISTE DES VIDÉOS</h3>
            </div>
            <div className="video-list">
                <Video data={data} onVideoSelected={onVideoSelected} />
            </div>
        </div>
    );
};

export default VideoList;




