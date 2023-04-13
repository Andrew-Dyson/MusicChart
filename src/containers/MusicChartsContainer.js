import React, { useState, useEffect } from 'react';
import SongList from '../components/SongList';
import ListItem from '../components/ListItem';

const MusicChartsContainer = () => {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        fetchSongs();
      }, [])

    const fetchSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(response => response.json())
        .then(data => setSongs(data.feed.entry))
        // .then(data => console.log(data.feed.entry))
    }

    return (
        <>
            <SongList songs={songs} />
        </>
    )


}

export default MusicChartsContainer;