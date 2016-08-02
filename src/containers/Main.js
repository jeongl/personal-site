import React, { Component } from 'react';
import SocketHandler from './SocketHandler';
import { connect } from 'react-redux';

class Main extends Component {
  constructor(props){ super(props) }
  render() {
    return (
      <div>
        {this.props.children}
        <SocketHandler/>
      </div>
    );
  }
}

function mapStateToProps(state){return {}}
export default connect(mapStateToProps)(Main);