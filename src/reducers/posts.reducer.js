import { 
  REQUEST_POSTS, 
  RECEIVED_POSTS, 
  RECEIVED_INITIAL_BATCH, 
  DELETE_POST,
  READ_POST,
  REFRESHED_POSTS,
  DELETE_ALL_POSTS
} from '../actions/posts.actions'

function posts(state = [], action) {
  switch(action.type) {
    case REQUEST_POSTS:
      return state
    case RECEIVED_POSTS:
      return [...state, ...action.payload]
    case RECEIVED_INITIAL_BATCH:
      return [...action.payload]
    case REFRESHED_POSTS:
      return [...action.payload]
    case DELETE_POST:
      return state.filter(item => item.id !== action.payload)
    case DELETE_ALL_POSTS:
      return []
    case READ_POST:
      return state.map(item => {
        if (item.id === action.payload) {
          item.read = true
        }

        return item
      })
    default:
      return state
  }
}

export default posts
