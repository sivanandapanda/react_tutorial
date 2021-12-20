import { combineReducers } from "redux";

const songsReducer = () => {
    return [
        { title: 'Sultan\'s of swing', duration: '10:30'},
        { title: 'Stairway to heaven', duration: '11:10'},
        { title: 'Romeo and Juliet', duration: '9:20'},
        { title: 'Brothers in arms', duration: '7:45'},
        { title: 'Kashmir', duration: '5:25'},
        { title: 'Hey Jude', duration: '8:20'},
        { title: 'Imagine', duration: '5:05'},
        { title: 'While my guitar gently weeps', duration: '3:15'},
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});