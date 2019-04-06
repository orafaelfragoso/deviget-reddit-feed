import { TOGGLE_MOBILE } from '../actions/mobile.actions'

function mobile(state = false, action) {
  switch(action.type) {
    case TOGGLE_MOBILE:
      return action.payload
    default:
      return state
  }
}

export default mobile
