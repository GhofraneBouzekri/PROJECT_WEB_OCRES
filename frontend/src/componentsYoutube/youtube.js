import React from "react";
import Search from "./Search";
import youtubeApi from "./api";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

export default class Youtube extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            videoMetaInfo: [],
            selectedVideoId: null
        }
    }

    onVideoSelected = videoId => {
        this.setState({
            selectedVideoId: videoId

        })
    }

    onSearch = async keyword => {
        const response = await youtubeApi.get("/search", {

            params: {
                q: keyword
            }
        });
        console.log(response);

        this.setState({
            videoMetaInfo: response.data.items,
            selectedVideoId: response.data.items[0].id.videoId

        })


    }

    render() {
        return (

            <div className="container1">
                <body>
                    <Search onSearch={this.onSearch} />
                </body>
                <VideoPlayer videoId={this.state.selectedVideoId} />
                <VideoList onVideoSelected={this.onVideoSelected}
                    data={this.state.videoMetaInfo} />

            </div>

        );

    }

}




