import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';

function auth(state = {
	isFetching: false,
	isAuthenticated: false
}, action) {
	switch (action.type) {
		case 'LOGIN REQUEST': 
			return { ...state, 
				isFetching: true,
				isAuthenticated: false,
				user: action.creds				
			};
		case 'LOGIN_SUCESS':
			return { ...state,
				isFetching: false,
				isAuthenticated: true,
				errorMessage: ''
			};
		case 'LOGIN_FAILURE':
			return { ...state,
				isFetching: false,
				isAuthenticated: false,
				errorMessage: action.message
			};
		case 'LOGOUT_SUCCESS':
			return { ...state, 
				isFetching: true, 
				isAuthenticated: false 
			};
		default:
			return state;
	}
}

function posts(state = {
	isFetching: false,
	anotherProperty: false,
	posts: [],
	currentPost: {},
	text: '<p style="color: grey; font-size: 150px">hello, world!</p>'
}, action) {
	switch(action.type) {
		case 'GETPOSTS_REQUEST':
			return {...state,
				isFetching: true,
				val: action.val || 0
			};
		case 'UPDATE_CURRENT_POST_VIEW':
			return {...state,
				val: action.val || 0
			};
		case 'FETCH_AND_MERGE_POSTS':
			return {...state,
				val: action.val || 0,
				posts: action.posts
			};
		case 'CHANGE_POST':
			return {...state,
				val: action.val || 0,
				currentPost: action.currentPost
			};			
		case 'CREATE_POST':
			return {...state,
				text: action.text
			};
		default: 
			return state;		
	}
}

function socket(state = {
	text: null,
	count: 0,
	ipList: []
}, action) {
	switch(action.type) {
		case 'RECEIVE_SOCKET_MESSAGE': 
			return { ...state,
				count: action.count,
				ipList: action.ipList
			}
		default:
			return state;
	}
}

const rootReducer = combineReducers({
  auth,
  posts,
  socket,
  routing: routerReducer
});

export default rootReducer;
