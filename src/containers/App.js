import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import '../styles/main.scss';
import '../styles/burger-menu.scss';
import '../styles/image-gallery-main-styles.scss';
import Gallery from '../components/Gallery.js';

class App extends Component {
  constructor(props){ 
    super(props);
  }
  render() {
    let style = {paddingLeft: '.7em'}
    return (
      <div className="parent">
        <div className="row">
          <div className="three columns offset-by-one parent__name"><h2>Jeong Lim</h2></div>
          <div className="one column offset-by-four parent__link"><Link to="/portfolio">Portfolio</Link></div>
          <div className="one column parent__link" style={style}><Link to="/blog">Blog</Link></div>
          <div className="one column parent__link"><a target="blank" href="https://www.linkedin.com/in/jeonglim">Linkedin</a></div>
          <div className="one column parent__link"><a href="">About</a></div>
        </div>
        <div className="row">
          <div className="three columns offset-by-one parent__desc"><h6>Javascript developer from Seattle</h6></div>
        </div>
        <div className="row gallery">
          <Gallery />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){return {};}
export default connect(mapStateToProps, {})(App);