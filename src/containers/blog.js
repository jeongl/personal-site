import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ReducePost from '../components/blog/reduce.js';
import RenderPost from '../components/render-post.js';
import '../styles/quill.snow.css';
import '../styles/blog.scss';
import '../styles/paginate.scss';
import { 
  fetchPostsAndMergeCustom, 
  updateDisplayedPost,
  changePost
} from '../actions/index.js';
import Scroll from 'react-scroll';
import ReactPaginate from 'react-paginate';
let scroll = Scroll.animateScroll;

class Blog extends Component {
  constructor(props){
    super(props);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount(){
    let customPosts = [<ReducePost />];
    this.props.fetchPostsAndMergeCustom(customPosts)
    var self = this;
  }

  getPost() {
    let currentPost = this.props.posts.currentPost;
    if ( typeof currentPost === 'undefined' || currentPost.length <=0 ) return false;
    if ( currentPost.type === 'custom' ){
      return (currentPost.original);
    } else if ( currentPost.type === 'db' ) return (
      <RenderPost 
        html={currentPost.original.html}
        postTitle={currentPost.postTitle}
        postDate={currentPost.postDate}/>
    );
  }

  handlePageClick(val) {
    this.props.updateDisplayedPost(val.selected);
    this.props.changePost();
    scroll.scrollToTop({duration:10});
  }

  render() {
    let { posts: {posts: posts } } = this.props;
    if (typeof posts === 'undefined') return false;
    return (
      <div>
        {this.getPost()}
        <div className="container" id="react-paginate">
          <ReactPaginate previousLabel={"previous"}
                         nextLabel={"next"}
                         breakLabel={<a href="">...</a>}
                         breakClassName={"break-me"}
                         pageNum={posts.length}
                         marginPagesDisplayed={posts.length}
                         pageRangeDisplayed={posts.length}
                         clickCallback={this.handlePageClick}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />          
        </div>
      </div>
    );
  }

}

Blog.propTypes = {
  fetchPostsAndMergeCustom: PropTypes.func.isRequired,
  updateDisplayedPost: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    posts: state.posts
  };
}

export default connect( mapStateToProps, {
  fetchPostsAndMergeCustom,
  updateDisplayedPost,
  changePost
})(Blog);