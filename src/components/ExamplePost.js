import React, { Component, PropTypes } from 'react';
import MenuComponent from './Menu.js';
import MenuWrap from './menu-wrap.js';
import { xcode } from 'react-syntax-highlighter/dist/styles';
import '../styles/blog.scss';

let style = {
  paddingTop: '1em'
}

class examplePost extends Component {
  constructor(props){
    super(props)
    this.state = {
      postDate: props.postDate,
      postTitle: props.postTitle
    };
  }
  blogPost() {
    return (
      <div className="row">
        <div className="ten columns img">
          <h5>Quite possibly the nicest beach i've ever been to.</h5>
          <img src="" alt=""/>
        </div>
        <div className="ten columns img">
          <h5>Quite possibly the nicest beach i've ever been to.</h5>
          <img src="" alt=""/>
        </div>        
      </div>
    )
  }

  render() {
    return (
      <MenuWrap 
        html={this.blogPost()}
        postTitle={this.state.postTitle}
        postDate={this.state.postDate}>
      </MenuWrap>
    )
  }
}

examplePost.defaultProps = { 
  postDate: '07-10-2016',
  postTitle: 'Cannon Beach'
};
export default examplePost;