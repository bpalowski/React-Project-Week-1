import React from 'react';
import Bar from '../img/bar1.jpg';
import ReactHowler from 'react-howler';

var yo ={
  backgroundImage: `url(${Bar})`,
  color: 'black',
  height: '700px',
  width: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  textAlign: 'center',
  fontFamily: 'cursive',
  fontSize: '30px',
};

class Home extends React.Component {

  getHower () {
    this.player.howler;
  }

  getDuration () {
    this.player.duration();
  }

  getSeek () {
    this.player.seek();
  }

  setSeek () {
    this.player.seek(1.5);
  }

  render () {
    return (
      <div style={yo}>
        <ReactHowler
          src= "https://freemusicarchive.org/file/music/ccCommunity/Lobo_Loco/Over_Midnight/Lobo_Loco_-_12_-_Searching_for_Zelda_ID_948.mp3"
          playing={true}
          ref={(ref) => (this.player = ref)}/>
      </div>
    );
  }
}


export default Home;
