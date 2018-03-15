import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import './App.css';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

// intentionally left in
//#idgaf #yolo
const API_KEY = 'AIzaSyAkxiCZn_DaswfFUnBNgF3kK6bwyI3pM8w';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'cats'}, videos => this.setState({ videos }) );
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
