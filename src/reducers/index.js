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
		case 'CREATE_POST':
			return {...state,
				text: action.text
			};
		default: 
			return state;		
	}
}

const rootReducer = combineReducers({
  auth,
  posts,
  routing: routerReducer
});

export default rootReducer;
