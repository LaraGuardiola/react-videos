import axios from 'axios'

const KEY = 'AIzaSyBLAvva7YAAD820fyK8PanFwJZEGBm2COc' 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
})