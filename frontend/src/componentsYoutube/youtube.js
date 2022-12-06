import React from "react";
import Search from "./Search";
import youtubeApi from "./api";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

export default class Youtube extends React.Component {

    state = {
        videoMetaInfo: [],
        selectedVideoId: null
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

            <div>
                <body>
                    <Search onSearch={this.onSearch} />
                </body>


                <VideoList onVideoSelected={this.onVideoSelected}
                    data={this.state.videoMetaInfo} />
                <VideoPlayer videoId={this.state.selectedVideoId} />

            </div>

        );

    }

}




