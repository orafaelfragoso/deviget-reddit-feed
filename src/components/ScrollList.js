import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './stylesheets/ScrollList.module.scss'

class ScrollList extends Component {
  render() {
    return (
      <div className={styles.Container}>
        {this.props.render}
      </div>
    )
  }
}

ScrollList.propTypes = {
  render: PropTypes.arrayOf(PropTypes.element)
}

ScrollList.defaultProps = {

}

export default ScrollList
