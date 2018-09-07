import React from 'react';
import Header from './Header';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import NewTappControl from './NewTappControl';
import Error404 from './Error404';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/#' component={TapList} />
        <Route path='/newTappControl' component={NewTappControl} />
        <Route path='/error404' component={Error404} />
      </Switch>

    </div>
  );
}

export default App;
