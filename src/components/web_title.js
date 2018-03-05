

/////////////////////// WEB TITLE ////////////////////////////////

import React, {Component} from 'react';
import axios from 'axios';
import _ from 'lodash';

/////////////////////////////////////////////////////////////////

class WebTitle extends Component {

  constructor(props) {
    super(props);

    this.state = {background: 'http://68.media.tumblr.com/fda82a7f8927866c55551ddf409166b7/tumblr_myy3ywRqiE1satf1do1_1280.png'}

    this.randomBackground = this.randomBackground.bind(this);
  }

  randomBackground() {
    axios.get('https://archillect-api.now.sh/random')
      .then(res => {
        setTimeout(this.setState({background: res.data.source}),5000);
      });
  }

  render() {
    const videoSearch = _.debounce( () => {this.randomBackground() }, 5000);
    setInterval(videoSearch(), 10000);
    return(
      <section className="hero">
        <div className="hero-body web-title titlee" style={{backgroundImage: `url(${this.state.background})`}}>
          <ul className="fucking-list">
            <li><i className="fab fa-youtube"></i></li>
            <li><h1>Tonitube</h1></li>
          </ul>
        </div>
      </section>

    );
  }
};

//2- We must export the component

export default WebTitle;

/////////////////////////////////////////////////////////////////
