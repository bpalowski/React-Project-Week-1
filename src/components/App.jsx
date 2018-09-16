import React from 'react';

import Header from './Header';
import { Switch, Route } from 'react-router-dom';

import Error404 from './Error404';
import TapControl from './TapControl';
import TapList from './TapList';
import Home from './Home';
import TapDetail from './TapDetail';
// import Moment from 'moment';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
      tapList: []
    };
    this.handleNewTapToList = this.handleNewTapToList.bind(this);
  }
  // componentDidMount(){
  //   this.waitTimeUpdate = setInterval(()=>
  //     this.updateTapWaitTime(),
  //   5000
  //   );
  // }
  //
  // componentWillUnmount(){
  //   clearInterval(this.waitTimeUpdate);
  // }
  //
  // updateTapWaitTime(){
  //   let newTapList = this.state.tapList.slice();
  //   newTapList.forEach((tap) =>
  //     tap.formattedWaitTime =(tap.timeOpen).fromNow(true)
  //   );
  //   this.setState({tapList: newTapList});
  // }
  //

  handleNewTapToList(newTap){
    var newTapList = this.state.tapList.slice();

    newTapList.push(newTap);
    this.setState({tapList: newTapList});
  }

  render(){
    return (
      <div>

        <Header/>
        <Switch>
          <Route exact path='/' component ={Home} />
          <Route path='/tapList' render={()=><TapList tapList={this.state.tapList} />} />
          <Route path='/newTap' render={()=><TapControl onNewTap={this.handleNewTapToList} />} />
          <Route exact path='/detail' component ={TapDetail} />
          <Route component={Error404} />
        </Switch>
      </div>

    );
  }
}

export default App;
