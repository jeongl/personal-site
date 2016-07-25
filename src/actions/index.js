export function postsReceived(posts) {
  return {
    type: 'GETPOSTS_REQUEST',
    isFetching: true
  };
}

export function updateDisplayedPost(val) {
  return {
    type: 'UPDATE_CURRENT_POST_VIEW',
    val
  };
}

export function fetchPostsAndMergeCustom(customPosts) {
  return {
    type: 'FETCH_AND_MERGE_POSTS',
    customPosts
  };
}

export function createPost(text) {
  return {
    type: 'CREATE_POST',
    text
  };
}