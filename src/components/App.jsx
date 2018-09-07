import React from 'react';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewTapp from './NewTapp';
import Error404 from './Error404';
import TapControl from './TapControl';
import TapList from './TapList';
import Tap from './Tap';



function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/#' component={App} />
        <Route path='/tapControl' component={TapControl} />
        <Route path='/error404' component={Error404} />
        <Route path="/tapList" component={TapList}/>
        <Route path="/newTapp" component={NewTapp}/>
        <Route path="/tap" component={Tap}/>
        <h1>Hello Welcome to the tap Room</h1>
      </Switch>
    </div>

  );
}

export default App;
