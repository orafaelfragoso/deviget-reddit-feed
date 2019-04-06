import { REQUEST_POSTS, RECEIVED_POSTS, RECEIVED_INITIAL_BATCH, DELETE_POST } from '../actions/posts.actions'

function posts(state = [], action) {
  switch(action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVED_POSTS:
      return [...state, ...action.payload]
    case RECEIVED_INITIAL_BATCH:
      return [...action.payload]
    case DELETE_POST:
      return state.filter(item => item.data.id !== action.payload)
    default:
      return state
  }
}

export default posts
