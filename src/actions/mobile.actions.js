export const TOGGLE_MOBILE = 'toggle_mobile'

export const toggleMobile = (mobile) => {
  return function (dispatch) {
    dispatch({
      type: TOGGLE_MOBILE,
      payload: mobile
    })
  }
}
