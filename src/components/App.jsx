import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapp from './NewTapp';
import Error404 from './Error404';
import TapControl from './TapControl';
import TapList from './TapList';
import Tap from './Tap';
import Bar from '../img/bar1.jpg';
import Background from './Background';

var style ={
backgroundImage: `url(${Bar})`,
};

function App(){


  return (

    <div>

      <style jsx>{`
        div img{
          height: 700px;
          width: 100%;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        div{
          text-align: center;
        }
         div h1{
          font-family: 'Lobster', cursive;

        }
      `}</style>

      <Header/>
      <Background/>
      <Switch>

        <Route exact path='/#' component={App} />
        <Route path='/tapControl' component={TapControl} />
        <Route path='/error404' component={Error404} />
        <Route path="/tapList" component={TapList}/>
        <Route path="/newTapp" component={NewTapp}/>
        <Route path="/tap" component={Tap}/>

        <img style={style}/>

      </Switch>




    </div >





  );
}

export default App;
