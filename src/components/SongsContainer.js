import React, { Component } from 'react';
import SongsList from '../containers/SongsList';

class SongsContainer extends Component {
  
  // inherit Component stuff and pass this.props to its constructor
  constructor (props) {
    super(props);
    this.state = {
      songs: []
    }
  }

  // do an API request after render has completed
  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener("load", () => {
      if(request.status !== 200) return;
      const jsonString = request.responseText;
      const data = JSON.parse(jsonString);

      // when request returns a response, set this.state to the response data
      this.setState({ songs: data });
    })
    request.send();
  }

  // render a new instance of SongsList with a custom property of this.state.songs
  render () {
    return (
      <SongsList songs={this.state.songs}/>
    )
  }
}

export default SongsContainer;