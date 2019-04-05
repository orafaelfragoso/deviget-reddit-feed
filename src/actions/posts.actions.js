import Reddit from '../services/reddit'
import { loadState } from '../services/localStorage'

const api = new Reddit()

export const REQUEST_POSTS = 'request_posts'
export const RECEIVED_POSTS = 'received_posts'

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivedPosts = (data) => ({
  type: RECEIVED_POSTS,
  payload: data
})

export function fetchPosts(initial = false) {
  return function (dispatch) {
    if (initial) {
      const state = loadState()

      if (state !== undefined && state.hasOwnProperty('posts')) {
        return
      }
    }

    dispatch(requestPosts())
    return api.get()
      .then((json) => {
        dispatch(receivedPosts(json))
      })
  }
}
