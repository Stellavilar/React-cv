import React, { Component } from 'react';
import Youtube from 'react-youtube';

class YoutubePokedex extends Component {

    constructor(props) {
        super (props);
        this.state={};
      };
    
      videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
      };
      
      render() {
        const opts= {
          height : "390",
          width: "575",
        };

        const {videoId} = this.props;
        return (
            <Youtube
             videoId={videoId}
             opts={opts}
             onReady={this.videoOnReady}
             />
        )
    };

};

export default YoutubePokedex;