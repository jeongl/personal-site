import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index.js';
import '../styles/blog.scss';

class InteractiveTemplates extends Component {
  constructor(props){
    super(props);
    this.onTextChange = this.onTextChange.bind(this);
    this.createMarkup = this.createMarkup.bind(this);
  }

  createMarkup() { 
    return { __html: this.props.posts.text };
  }

  onTextChange(event){
    this.props.createPost(event.target.value)
  }

  render(){
    let style= { height: '200px' }
    return (
			<div className="container">
        <div dangerouslySetInnerHTML={this.createMarkup()} className="row">
        </div>
        <div className="row">
          <textarea style={style} className="u-full-width" value={this.props.posts.text} onChange={this.onTextChange}></textarea>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts
  };
}

export default connect( mapStateToProps, {
  createPost
})(InteractiveTemplates);