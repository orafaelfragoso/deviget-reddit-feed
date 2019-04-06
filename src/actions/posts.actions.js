import Reddit from '../services/reddit'
import { loadState } from '../services/localStorage'

const api = new Reddit()

export const REQUEST_POSTS = 'request_posts'
export const RECEIVED_POSTS = 'received_posts'
export const RECEIVED_INITIAL_BATCH = 'received_initial_batch'
export const DELETE_POST = 'delete_post'

export const requestPosts = () => ({
  type: REQUEST_POSTS
})

export const receivedPosts = (data) => ({
  type: RECEIVED_POSTS,
  payload: data
})

export const receivedInitialBatch = (data) => ({
  type: RECEIVED_INITIAL_BATCH,
  payload: data
})

export const removePost = (id) => ({
  type: DELETE_POST,
  payload: id
})

export function fetchPosts(initial = false) {
  return function (dispatch) {
    if (initial) {
      const state = loadState()

      if (state !== undefined && state.hasOwnProperty('posts') && state.posts.length > 0) {
        dispatch(receivedInitialBatch(state.posts))
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

export function deletePost(id) {
  return function (dispatch) {
    dispatch(removePost(id))
  }
}
