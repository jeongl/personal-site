import React, { Component } from 'react';
import App from './App';
import { socketMessage } from '../actions/index';
import { connect } from 'react-redux';

class SocketHandler extends Component {
  constructor(props){ 
    super(props);
  }
  componentDidMount(){
    var self = this;
    const socket = new WebSocket('ws://localhost:3010');
    socket.onopen = function(){
      console.log('socket connection opened: ');
    }
    socket.onmessage = function(evt){
      self.props.socketMessage(evt.data);
    }    
  }
  render() {
    return (
      <div id="socketHandler"></div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts    
  }
}

export default connect(mapStateToProps, {
  socketMessage
})(SocketHandler);