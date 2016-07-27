import 'whatwg-fetch';

export default store => next => action => {
  if ( action.type === 'CHANGE_POST'  ){
    let postState = store.getState().posts;
    return next({
      type: action.type,
      val: postState.val,
      currentPost: postState.posts[postState.val]      
    });
  } else {
    return next(action);
  }
}
