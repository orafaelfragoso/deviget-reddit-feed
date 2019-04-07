import React, { Component } from 'react'
import styles from './stylesheets/ListItem.module.scss'
import './stylesheets/List.scss'
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

  _handleClick(post) {
    return () => {
      this.props.onClick(post)
    }
  }

  _handleDismiss(event) {
    event.stopPropagation()
    this.props.onDismiss(this.props.post.id)
  }

  _limitCharacters(text) {
    return (text.length > 45) ? `${text.substring(0, 42)}...` : text
  }

  render() {
    const {
      title,
      description,
      image,
      comments,
      id
    } = this.props.post

    return (
      <div key={id} onClick={this._handleClick(this.props.post)} className={this.props.post.read ? styles.Wrapper : `${styles.Wrapper} ${styles.Unread}`} style={this.props.style}>
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
      </div>
    )
  }

}

export default ListItem
