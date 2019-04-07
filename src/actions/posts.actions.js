import Reddit from '../services/reddit'
import { loadState } from '../services/localStorage'
import { toggleLoader } from './loader.actions'

const api = new Reddit()

export const REQUEST_POSTS = 'request_posts'
export const RECEIVED_POSTS = 'received_posts'
export const RECEIVED_INITIAL_BATCH = 'received_initial_batch'
export const DELETE_POST = 'delete_post'
export const LOAD_POST = 'load_post'
export const SAVE_NEXT_PAGE = 'save_next_page'
export const READ_POST = 'read_post'

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

export const readPost = (id) => ({
  type: READ_POST,
  payload: id
})

export const selectPost = (post) => ({
  type: LOAD_POST,
  payload: post
})

export const saveNextPage = (page) => ({
  type: SAVE_NEXT_PAGE,
  payload: page
})

function sanitizePosts(posts) {
  if (posts.length > 0) {
    return posts.map(item => ({
      image: item.data.thumbnail,
      title: item.data.author,
      description: item.data.title,
      comments: item.data.num_comments,
      createdAt: item.data.created,
      id: item.data.id,
      upvotes: item.data.ups,
      read: false
    }))
  }

  return []
}

export function fetchPosts(initial = false) {
  return function (dispatch) {
    dispatch(toggleLoader(true))

    if (initial) {
      const state = loadState()

      if (state !== undefined && state.hasOwnProperty('posts') && state.posts.length > 0) {
        dispatch(receivedInitialBatch(state.posts))
        dispatch(toggleLoader(false))
        return
      }
    }

    dispatch(requestPosts())
    return api.get()
      .then((json) => {
        dispatch(saveNextPage(json.after))
        dispatch(receivedPosts(sanitizePosts(json.children)))
        dispatch(toggleLoader(false))
      })
  }
}

export function fetchMorePosts(page) {
  return function (dispatch) {
    dispatch(toggleLoader(true))
    dispatch(requestPosts())

    return api.get(page)
      .then((json) => {
        dispatch(saveNextPage(json.after))
        dispatch(receivedPosts(sanitizePosts(json.children)))
        dispatch(toggleLoader(false))
      })
  }
}

export function deletePost(id) {
  return function (dispatch) {
    dispatch(removePost(id))
  }
}
