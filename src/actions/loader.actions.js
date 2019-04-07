export const TOGGLE_LOADER = 'toggle_loader'

export const toggleLoader = (show) => {
  return function (dispatch) {
    dispatch({
      type: TOGGLE_LOADER,
      payload: show
    })
  }
}
