import React, { Component } from 'react'
import styles from './stylesheets/ListItem.module.scss'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'


class ListItem extends Component {
  
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
    this._handleDismiss = this._handleDismiss.bind(this)
  }

  _handleClick(e) {
    
  }

  _handleDismiss() {
    this.props.onDismiss(this.props.id)
  }

  _limitCharacters(text) {
    return (text.length > 45) ? `${text.substring(0, 42)}...` : text
  }

  render() {
    const {
      image,
      title,
      description,
      comments,
      id
    } = this.props

    return (
      <MuiListItem key={id} dense button divider onClick={this._handleClick} className={styles.Unread}>
        <ListItemAvatar>
          <Avatar alt={description} src={image} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography component="span" variant="subtitle2" className={styles.Title}>
                {title}
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2">
                {this._limitCharacters(description)}
              </Typography>
              <Typography component="span" variant="caption" color="primary">
                {comments} comments
              </Typography>
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton aria-label="Delete" onClick={this._handleDismiss}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </MuiListItem>
    )
  }

}

export default ListItem
