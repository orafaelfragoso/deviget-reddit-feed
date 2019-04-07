import { LOAD_POST } from '../actions/posts.actions'

function postDetail(state = null, action) {
  switch(action.type) {
    case LOAD_POST:
      return {...action.payload}
    default:
      return state
  }
}

export default postDetail

