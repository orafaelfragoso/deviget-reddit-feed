import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'

const Header = ({title, showMenu, onMenuClick}) => (
  <AppBar position="static">
    <Toolbar variant="dense">
      {showMenu && (
        <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h6" color="inherit">
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
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
