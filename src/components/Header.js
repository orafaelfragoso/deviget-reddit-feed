import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CachedIcon from '@material-ui/icons/Cached'
import DeleteIcon from '@material-ui/icons/Delete'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
}

const Header = ({title, showMenu, showRefresh, onRefreshClick, onMenuClick, showDelete, onDeleteClick, classes}) => (
  <AppBar position="static">
    <Toolbar variant="dense">
      {showMenu && (
        <IconButton color="inherit" aria-label="Menu" onClick={onMenuClick}>
          <MenuIcon />
        </IconButton>
      )}
      <Typography variant="h6" color="inherit" className={classes.grow}>
        {title}
      </Typography>
      <div>
        {showRefresh && (
          <IconButton color="inherit" aria-label="Refresh" onClick={onRefreshClick}>
            <CachedIcon />
          </IconButton>
        )}
        {showDelete && (
          <IconButton color="inherit" aria-label="Delete" onClick={onDeleteClick}>
            <DeleteIcon />
          </IconButton>
        )}
      </div>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  showMenu: PropTypes.bool,
  showRefresh: PropTypes.bool,
  showDelete: PropTypes.bool,
  onMenuClick: PropTypes.func,
  onRefreshClick: PropTypes.func,
  onDeleteClick: PropTypes.func
}

Header.defaultProps = {
  showMenu: false,
  showRefresh: false,
  showDelete: false,
  onMenuClick: () => {},
  onRefreshClick: () => {},
  onDeleteClick: () => {}
}

export default withStyles(styles)(Header)
