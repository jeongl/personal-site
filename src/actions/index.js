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

export function changePost() {
  return {
    type: 'CHANGE_POST'
  };
}

export function createPost(text) {
  return {
    type: 'CREATE_POST',
    text
  };
}

export function socketMessage(data) {
  return {
    type: 'RECEIVE_SOCKET_MESSAGE',
    count: JSON.parse(data).count,
    ipList: JSON.parse(data).ipList
  }
}