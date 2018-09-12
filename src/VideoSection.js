import React, { Component } from 'react';
import Snippet from './VideoSection/Snippet';

class VideoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: []
    };
  }
  render() {

    return (
      <Snippet />
    );
  }
}

export default VideoSection;
