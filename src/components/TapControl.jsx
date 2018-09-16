import React from 'react';
import NewTapp from './NewTapp';
import PropTypes from 'prop-types';
import TapOptions from './TapOptions';

class TapControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      booleanView: false
    };
    this.changeOfViewConformation = this.changeOfViewConformation.bind(this);
  }


  changeOfViewConformation(){
    this.setState({booleanView: true});
  }

  render(){
    let viewDisplayCurrently = null;
    if(this.state.booleanView){
      viewDisplayCurrently = <NewTapp onNewTap={this.props.onNewTap}/>;
    }else{
      viewDisplayCurrently = <TapOptions onTapConfirmation={this.changeOfViewConformation}/>;
    }
    return (
      <div>
        {viewDisplayCurrently}
      </div>
    );
  }
}

TapControl.propTypes = {
  onNewTap: PropTypes.func
};

export default TapControl;
