import React from 'react';

const SongsList = (props) => {
  if (!props.songs.feed) return null;
  const songs = props.songs.feed.entry.map((song, index) => {
    console.log(song);
    console.log(song.title.label);
    return (
      <React.Fragment key={index}>
        <h4>Title: {song.title.label}</h4>
        <p>Chart number: {index + 1}</p>
        <p>{song["im:artist"].label}</p>
      </React.Fragment>
    )
  })
  return songs;
}

export default SongsList;