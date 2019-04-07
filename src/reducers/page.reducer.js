import { SAVE_NEXT_PAGE } from '../actions/posts.actions'

function page(state = null, action) {
  switch(action.type) {
    case SAVE_NEXT_PAGE:
      return action.payload
    default:
      return state
  }
}

export default page


