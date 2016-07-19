import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import '../styles/main.scss';
import AboutPage from '../components/AboutPage.js';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="parent">
        <div className="row">
          <div className="three columns offset-by-one parent__name"><h2>Jeong Lim</h2></div>
          <div className="one column offset-by-two parent__link"><a href="">PORTFOLIO</a></div>
          <div className="one column parent__link"><a href="">BLOG</a></div>
          <div className="one column parent__link"><a href="">LINKEDIN</a></div>
          <div className="one column parent__link"><a href="">ABOUT</a></div>
        </div>
        <div className="row">
          <div className="two columns offset-by-one"><h6>Javascript developer from seattle</h6></div>
        </div>
        <AboutPage></AboutPage>
        {false && this.props.children}
      </div>
    )
  }

}

App.propTypes = {}

function mapStateToProps(state){
  return { test: 'test property' }
}

export default connect(mapStateToProps, {})(App)