import React from 'react';

// make a stateless function and pass it props from wherever it is invoked
const SongsList = (props) => {
  // if the props.songs are falsy, return here
  if (!props.songs.feed) return null;

  // otherwise, map each song in the songs.feed.entry array to a new array
  const songs = props.songs.feed.entry.map((song, index) => {
    console.log(song);
    console.log(song.title.label);

    // for each song, create a group of React elements with values and return them
    return (
      <React.Fragment key={index}>
        <h4>Title: {song.title.label}</h4>
        <p>Chart number: {index + 1}</p>
        <p>{song["im:artist"].label}</p>
      </React.Fragment>
    )
  })

  // finally, return the new array which now contains a group of HTML elements with values
  return songs;
}

export default SongsList;