import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MaterialList from '@material-ui/core/List'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import throttle from 'lodash/throttle'
import AnimatedSpinner from '../components/AnimatedSpinner'
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

  constructor(props) {
    super(props)
    this._delayedScroll = throttle(this._handleScroll, 500)
  }

  _onScroll = event => {
    event.persist()
    this._delayedScroll(event)
  }

  _handleScroll = (e) => {
    const list = e.target
    const listItems = list.children[0].children
    const lastItem = listItems[listItems.length - 1]
    const { threshold, onReachedThreshold, isLoading, hasMoreItems } = this.props

    if (isLoading || !hasMoreItems) return

    const fireThreshold = list.scrollTop + list.offsetHeight
    const bottomThreshold = lastItem.offsetTop - threshold - lastItem.offsetHeight

    if (fireThreshold >= bottomThreshold) {
      onReachedThreshold()
    }
  }

  render() {
    const propsClone = {...this.props}
    delete propsClone.isLoading
    delete propsClone.hasMoreItems
    delete propsClone.threshold
    delete propsClone.onReachedThreshold

    return (
      <React.Fragment>
        <AnimatedSpinner show={this.props.isLoading} />
        <MaterialList 
          {...propsClone} 
          onScroll={this._onScroll.bind(this)}
          style={{position: 'relative'}}
        >
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
      </React.Fragment>
    )
  }
} 

List.propTypes = {
  threshold: PropTypes.number,
  onReachedThreshold: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  hasMoreItems: PropTypes.bool.isRequired
}

List.defaultProps = {
  onReachedThreshold: () => {},
  threshold: 100
}

export default withStyles(styles)(List)
