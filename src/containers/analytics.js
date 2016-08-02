import React, { Component, PropTypes } from 'react';
import MenuWrap from '../components/menu-wrap';
import '../styles/analytics.scss';
import { connect } from 'react-redux';
import _ from 'lodash';

class Analytics extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){}

  personList(item, i){
    return (
      <ul>
        <span><u><b>User {i + 1}</b></u></span>
        {_.map(item, (item, desc) => <li>{desc} - {item} </li>)}
      </ul>
    )
  }

  usersList() {
    return (
      <div className="row">
        <div className="ten columns code">
          <p className="userCount">Currently <strong>{this.props.socket.count}</strong> person(s) visiting this site.</p>
          <p className="notice">*real time data</p>
          {this.props.socket.ipList.map((item, i, b) => {
            return this.personList(
              _.pick(item, ['ip', 'city', 'loc', 'country' ]), i)
          })}
        </div>
      </div>
    ) 
  }


  render() {
    return (
      <MenuWrap 
        html={this.usersList()}
        postTitle={`Site Analytics`}>
      </MenuWrap>
    );
  }

}

Analytics.propTypes = {

};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts,
    socket: state.socket
  };
}

export default connect( mapStateToProps, {})(Analytics);