import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

// intentionally left in
//#idgaf #yolo
const API_KEY = 'AIzaSyAkxiCZn_DaswfFUnBNgF3kK6bwyI3pM8w';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    YTSearch({ key: API_KEY, term: 'surfboards'}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    });
  }

  render() {
    return (
      <div className="App container">
        <SearchBar />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
