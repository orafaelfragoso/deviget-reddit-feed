import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loadState, saveState } from './services/localStorage'
import ReduxThunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import postsReducer from './reducers/posts.reducer'

const persistedState = loadState()
const combinedReducers = combineReducers({
  posts: postsReducer
})

const store = createStore(
  combinedReducers,
  persistedState,
  applyMiddleware(ReduxThunk)
)

store.subscribe(throttle(() => {
  saveState(store.getState())
}, 1000))

export default store
