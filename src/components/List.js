import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MaterialList from '@material-ui/core/List'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './stylesheets/List.scss'

const styles = theme => ({
  root: {
    flex: 1,
    width: '100%',
    maxWidth: 300,
    overflowY: 'auto',
    overflowX: 'hidden'
  }
})

class List extends Component {
  render() {
    return (
      <MaterialList {...this.props}>
        <ReactCSSTransitionGroup
          transitionName="list"
          transitionLeaveTimeout={300}
          transitionEnter={false}
          transitionAppear={true}
          transitionAppearTimeout={300}
        >
          {this.props.children}
        </ReactCSSTransitionGroup>
      </MaterialList>
    )
  }
} 

export default withStyles(styles)(List)
