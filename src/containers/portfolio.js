import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuComponent from '../components/Menu.js';
import '../styles/portfolio.scss';

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div id="outer-container">
        <MenuComponent pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <main id="page-wrap">
          <div>
            <div className="row">
              <h1 className="page-wrap--heading">Projects</h1>
            </div>
            <div className="row project-row">
              <p><em><a target="blank" href="http://jlim.site">This project site - code repo</a></em></p>
              <ul>
                <li>React / redux front end</li>
                <li>Node.js mock backend</li>
                <li>Todo - allow crud operations, admin authentication.</li>
              </ul>
            </div>            
            <div className="row project-row">
              <p><em><a target="blank" href="http://jlim.site/cats">Insta Cats</a></em></p>
              <ul>
                <li>React front end; displays API collection from <a href="http://thecatapi.com/">The cat api</a></li>
              </ul>
            </div>
            <div className="row project-row">
              <p><em><a target="blank" href="https://lim-s-blog.herokuapp.com/#/">Angular JS blog</a></em></p>
              <ul>
                <li>Full stack blog application</li>
                <li>Allows CRUD operations for blog posts</li>
                <li>Angular.js, Node.js, mongodb backend</li>
              </ul>
            </div>
            <div className="row project-row">
              <p><em><a target="blank" href="https://github.com/jeongl/simpleSeq.js">Simple sequence</a></em></p>
              <ul>
                <li>Utility for data flow</li>
              </ul>
            </div>
            <div className="row project-row">
              <p><em><a target="blank" href="https://github.com/jeongl/express-jwt-csrf-auth">JWT authentican strategy</a></em></p>
              <ul>
                <li>Authentication using both jwt tokens as well as a csrf token</li>
              </ul>
            </div>
          </div>
        </main>
      </div>    
    );
  }

}

function mapStateToProps(){
  return {
    test: 'test'
  };
}
export default connect(mapStateToProps, {})(App);