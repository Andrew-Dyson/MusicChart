import React from 'react';

const ListItem = ({song}) => {

console.log(song)
    return (
        <li> {song.title.label}</li>
      )
}

export default ListItem;