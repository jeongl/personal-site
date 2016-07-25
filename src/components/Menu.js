import React from 'react';
import {Link} from 'react-router';
import ImageGallery from 'react-image-gallery';
import '../styles/image-gallery-main-styles.scss';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';
let RadiumLink = Radium(Link);

class MenuComponent extends React.Component {
  render() { 
    return (
      <Menu>
        <RadiumLink className="menu-item" to="/">Home</RadiumLink>
        <RadiumLink className="menu-item" to="/portfolio">Portfolio</RadiumLink>
        <RadiumLink className="menu-item" to="/blog">Blog</RadiumLink>
        <RadiumLink className="menu-item" to="/blanktemplate">create post (in progress)</RadiumLink>
      </Menu>
    )
  }
}

export default MenuComponent;