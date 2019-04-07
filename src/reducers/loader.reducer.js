import { TOGGLE_LOADER } from '../actions/loader.actions'

function loader(state = false, action) {
  switch(action.type) {
    case TOGGLE_LOADER:
      return action.payload
    default:
      return state
  }
}

export default loader

