import React from 'react';
import Header from './Header';
import TapList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTapp from './NewTapp';


function App(){
  return (
    <div>
      <Header/>
      <Switch>
         <Route exact path='/' component={TapList} />
         <Route path='/newTapp' component={NewTapp} />
      </Switch>

    </div>
  );
}

export default App;