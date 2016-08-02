import React from 'react';
import App from './containers/App';
import Main from './containers/Main';
import Portfolio from './containers/portfolio';
import Blog from './containers/blog';
import analytics from './containers/analytics';
import templating from './containers/interactive-templating';
import { IndexRoute, Route } from 'react-router';
import { connect } from 'react-redux';

export default (
	<Route path="/" component={Main}>
		<IndexRoute component={App}/>
		<Route path="portfolio" component={Portfolio}/>
		<Route path="blog" component={Blog}/>
		<Route path="analytics" component={analytics}/>
		<Route path="blanktemplate" component={templating}/>
	</Route>
);