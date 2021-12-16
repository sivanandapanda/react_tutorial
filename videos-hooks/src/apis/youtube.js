import axios from "axios";

const KEY= 'AIzaSyD-7DxwHjrvDun4kPI9YjRADT2Q5WgMwcw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});