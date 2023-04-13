import React from 'react';
import ListItem from './ListItem';

const SongList = ({songs}) => {

    const songItems = songs.map((song, index) => {
        return <ListItem song={song} key={index}/>
    })

    return(
        <div>
            <ol>
            {songItems}
            </ol>
        </div>
    )

}


export default SongList;