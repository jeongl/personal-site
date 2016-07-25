import React from 'react';
import App from './containers/App';
import Portfolio from './containers/portfolio';
import Blog from './containers/blog';
import templating from './containers/interactive-templating';
import { Route } from 'react-router';

export default (
	<Route>
		<Route path="/" component={App} />
		<Route path="/portfolio" component={Portfolio} />
		<Route path="/blog" component={Blog} />
		<Route path="/blanktemplate" component={templating} />
  </Route>
);