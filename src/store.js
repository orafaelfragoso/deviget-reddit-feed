import { createStore, applyMiddleware, combineReducers } from 'redux'
import { loadState, saveState } from './services/localStorage'
import ReduxThunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import postsReducer from './reducers/posts.reducer'
import drawerReducer from './reducers/drawer.reducer'
import mobileReducer from './reducers/mobile.reducer'

const persistedState = loadState()
const combinedReducers = combineReducers({
  posts: postsReducer,
  drawer: drawerReducer,
  mobile: mobileReducer
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
