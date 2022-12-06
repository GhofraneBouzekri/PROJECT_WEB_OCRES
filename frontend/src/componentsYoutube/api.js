import axios from 'axios'

const KEY = 'AIzaSyBZo0TQq0uIemxOagypmH-HO47OC7kMgAM'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    },
    headers: {}
})




