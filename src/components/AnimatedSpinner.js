import React from 'react'
import CachedIcon from '@material-ui/icons/Cached'
import './stylesheets/AnimatedSpinner.scss'

const AnimatedSpinner = ({show}) => (
  <div className={show ? 'spinner show' : 'spinner'}>
    <CachedIcon />
  </div>
)

export default AnimatedSpinner
