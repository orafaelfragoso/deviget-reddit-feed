import { REQUEST_POSTS, RECEIVED_POSTS, RECEIVED_INITIAL_BATCH } from '../actions/posts.actions'

function posts(state = [], action) {
  switch(action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVED_POSTS:
      return [...state, ...action.payload]
    case RECEIVED_INITIAL_BATCH:
      return [...action.payload]
    default:
      return state
  }
}

export default posts
