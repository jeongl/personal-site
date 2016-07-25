import 'whatwg-fetch';

function mergeCustomAndSaved(customPosts, posts){
  let mergedPosts = [...customPosts, ...posts ];

  function getDate(obj){
    if (obj.hasOwnProperty('props')){
      return new Date(obj.props.postDate)
    } else {
      return new Date(obj.postDate)
    }
  }

  return mergedPosts.sort((a, b) => {
    return getDate(b) - getDate(a)
  }).map(item => Object.assign({}, {
    original: item,
    type: item.hasOwnProperty('props') ? 'custom' : 'db',
    postDate: item.hasOwnProperty('props') ? item.props.postDate : item.postDate,
    postTitle: item.hasOwnProperty('props') ? item.props.postTitle : item.postTitle
  }));
}

export default store => next => action => {
  if (action.type === 'FETCH_AND_MERGE_POSTS') {
    let config = { 
     method: 'GET',
     headers: { 'Content-Type':'application/x-www-form-urlencoded' }
    }
    
    return fetch('http://jlim.site/blogPosts')
      .then(response =>
         response.json()
        .then(posts => ({ posts, response }))
      ).then(({ posts, response }) =>  {
        if (!response.ok) {
          throw new Error(response);
        } else {
          next({
            type: action.type,
            posts: mergeCustomAndSaved(action.customPosts, posts)
          });
        }
      }).catch(err => console.log("Error: ", err));

  } else {
    return next(action);
  }
}
