import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styles from './stylesheets/ListItem.module.scss'
import MuiListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import timeAgo from '../utils/timeAgo'


class ListItem extends PureComponent {
  
  constructor(props) {
    super(props)
    this._handleClick = this._handleClick.bind(this)
    this._handleDismiss = this._handleDismiss.bind(this)
  }

  _handleClick(post) {
    const { onClick } = this.props
    return function() {
      onClick(post)
    }
  }

  _handleDismiss() {
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
      id,
      createdAt
    } = this.props.post

    return (
      <MuiListItem key={id} dense button divider onClick={this._handleClick(this.props.post)} className={(this.props.post.read ? null : styles.Unread)}>
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
              <span className={styles.Info}>
                <Typography component="span" variant="caption" color="primary">
                  {comments} comments
                </Typography>
                <Typography component="span" variant="caption" color="primary">
                  {timeAgo(new Date(createdAt * 1000))}
                </Typography>
              </span>
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

ListItem.propTypes = {
  post: PropTypes.object.isRequired,
  onClick: PropTypes.func,
  onDismiss: PropTypes.func
}

ListItem.defaultProps = {
  onClick: () => {},
  onDismiss: () => {}
}

export default ListItem
