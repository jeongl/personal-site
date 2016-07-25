import React, { Component, PropTypes } from 'react';
import MenuComponent from './Menu.js';
import MenuWrap from './menu-wrap.js';
import { xcode } from 'react-syntax-highlighter/dist/styles';
import '../styles/blog.scss';

class examplePost extends Component {
  constructor(props){
    super(props)
  }

  blogPost() {
    let html = this.props.html;
    function createMarkup() { return {__html: html}; };
    return (
      <div dangerouslySetInnerHTML={createMarkup()} />
    )
  }

  render() {
    return (
      <MenuWrap 
        html={this.blogPost()}
        postTitle={this.props.postTitle}
        postDate={this.props.postDate}>
      </MenuWrap>
    )
  }
}

export default examplePost;