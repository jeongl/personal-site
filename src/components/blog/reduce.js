import React, { Component, PropTypes } from 'react';
import MenuComponent from '../Menu.js';
import MenuWrap from '../menu-wrap.js' 
import SyntaxHighlighter from 'react-syntax-highlighter';
import { xcode } from 'react-syntax-highlighter/dist/styles';

let style = {
  paddingTop: '1em'
}

class reducePost extends Component {
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
        <div className="ten columns code">
          <strong><u>Object lookup</u></strong>
          <p>Sometimes there is a need to access deeply nested objects. I recently worked on an angular 
          filter that filtered based on matches of nested objects. It was messy and troublesome 
          to do in a dynamic and programmatic way.
          My first approach for object lookup was a simple approach to write something explicit depending on
          argument length, like this:</p>
          <SyntaxHighlighter className="syntaxHighlight" language='javascript' style={xcode}>{`
    var obj = {
      first : {
        second: 'hello, world!'
      }
    }

    function objectLookup(obj, ...params){
      if ( params.length === 1) {
        return obj[params[0]]
      } else if ( params.length === 2 ) {
        return obj[params[0]][params[1]]
    }

    objectLookup(obj, ['first'], ['second'] ) 

          `}</SyntaxHighlighter>
          <p>This is not scalable for deeply nested objects - let's look at an approach using reduce</p>

          <SyntaxHighlighter className="syntaxHighlight" language='javascript' style={xcode}>{`\
    var obj = {
      first : {
        second: {
          third: 'hello, world!'
        }
      }
    }

    function objectLookup(obj, params){
      return params.reduce((prev, current) => {
        return prev[current]
      }, Object.assign({}, obj))
    }

    objectLookup(obj, ['first','second'])
          `}</SyntaxHighlighter>
          <p>This basically folds the object, accessing the property in the list. Note that 
          Object.assign is used to not mutate the original object.</p>

          <strong><u>lodash type _.thru</u></strong>
          <p>This is a great sequential pipe method to transform data. Example - if you needed to  take an array
          of numbers, multiply each one by two, then sum the numbers in the array, _.thru could be used as such: </p>
          <SyntaxHighlighter className="syntaxHighlight" language='javascript' style={xcode}>{`
    var result = _([1, 2, ,3, 4]).thru(data => data.map(item => item * 2))
                    .thru(data => data.reduce((prev, current) => prev + current ))
                    .value();
          `}</SyntaxHighlighter>
          <p>This is perfectly fine and reads well, but let's explore an option with reduce.</p>
          <SyntaxHighlighter className="syntaxHighlight" language='javascript' style={xcode}>{`
    function transform (data, fns) {
      return fns.reduce((prev, currentFn) => {
        return currentFn( 
          (typeof prev === 'function') ? prev.call(this, data) : prev 
        );
      });
    }

    var result = transform([1, 2, 3, 4], [
      function (data) {
        return data.map(item => item * 2)
      },
      function (data) {
        return data.reduce((prev, current) => prev + current)
      }
    ]);
          `}</SyntaxHighlighter>
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

reducePost.defaultProps = { 
  postDate: '07-09-2016',
  postTitle: '.reduce Recipes' 
};
export default reducePost;