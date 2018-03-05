

/////////////////// REACT MAIN APP //////////////////////////////

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import search from 'youtube-api-search';
import _ from 'lodash';

// Components

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import WebTitle from './components/web_title';

// Youtube API key:

const API_KEY = 'AIzaSyAGftUQiOtEyHdvUvijnzeBDlmwyNuY95o';

/////////////////////////////////////////////////////////////////

//1- Create a new component and this component should produce html
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('');
  }

  videoSearch(term) {

    search ({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term) }, 300);

    return (
      <div>
        <div>
          <WebTitle />
        </div>

        <div className="boxx">
          <SearchBar
            onSearchTermChange={videoSearch}
          />
          <VideoDetail
            video={this.state.selectedVideo}
          />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

//2- Take this component's generated HTML and put it in the DOM

ReactDOM.render( <App /> , document.querySelector('.container'));

/////////////////////////////////////////////////////////////////
