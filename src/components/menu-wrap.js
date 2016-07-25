import React, { Component, PropTypes } from 'react';
import MenuComponent from './Menu.js';
import '../styles/blog.scss';

class MenuWrap extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div id="container">
        <MenuComponent pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } />
        <main id="page-wrap">
          <div>
            <div className="row">
              <h1 className="page-wrap--heading"><span className="underline">{this.props.postTitle}</span>
              <span><h6 className="u-pull-right page-wrap__date">{this.props.postDate}</h6></span>
              </h1>
            </div>        
            {this.props.html}           
          </div>
        </main>
      </div>    
    )
  }
}

export default MenuWrap;