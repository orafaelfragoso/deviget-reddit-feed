import React from 'react'
import PropTypes from 'prop-types'
import CachedIcon from '@material-ui/icons/Cached'
import './stylesheets/AnimatedSpinner.scss'

const AnimatedSpinner = ({show}) => (
  <div className={show ? 'spinner show' : 'spinner'}>
    <CachedIcon />
  </div>
)

AnimatedSpinner.propTypes = {
  show: PropTypes.bool
}

AnimatedSpinner.defaultProps = {
  show: false
}

export default AnimatedSpinner
