import React, {Component} from 'react';
import Youtube from 'react-youtube';

class YoutubeSAV extends Component {

    constructor(props) {
        super (props);
        this.state={};
      };
    
      videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
        console.log(event.target);
      };
      
      render() {
        const opts= {
          height : "390",
          width: "575",
          // playerVars: {
          //   //"https://youtu.be/W2_JOKIKyF0"
          //   autoplay: 1,
          //   }
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

export default YoutubeSAV;