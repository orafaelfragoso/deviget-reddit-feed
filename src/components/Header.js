import React from 'react'
import PropTypes from 'prop-types'
import styles from './stylesheets/Header.module.scss'

const Header = ({title, showMenu, onMenuClick}) => (
  <div className={styles.Container}>
    {(showMenu ? <span className={styles.Left} onClick={onMenuClick}>Menu</span> : null)}
    <h1 className={styles.Heading}>{title}</h1>
  </div>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showMenu: PropTypes.bool,
  onMenuClick: PropTypes.func
}

Header.defaultProps = {
  showMenu: false
}

export default Header
