export const OPEN_DRAWER = 'open_drawer'
export const CLOSE_DRAWER = 'close_drawer'

export const openDrawer = () => {
  return function (dispatch) {
    dispatch({
      type: OPEN_DRAWER
    })
  }
}

export const closeDrawer = () => {
  return function (dispatch) {
    dispatch({
      type: CLOSE_DRAWER
    })
  }
}
