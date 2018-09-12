import React, { Component } from 'react';
import Sidebar from './Sidebar';
import VideoSection from './VideoSection';

class Landing extends Component {
  render() {
    const allSections = this.props.sections;
    return (
      <div className="Landing">
        <Sidebar />
        {
          allSections.map( section => {
          return <VideoSection section = { section } /> })
        }
      </div>
    )
  }
}

export default Landing;
