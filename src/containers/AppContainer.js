import React, { Component } from 'react'
import { connect } from 'react-redux'
import styles from './stylesheets/AppContainer.module.scss'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import ListContainer from './ListContainer'
import DetailContainer from './DetailContainer'
import { openDrawer, closeDrawer } from '../actions/drawer.actions'
import { toggleMobile } from '../actions/mobile.actions'

class AppContainer extends Component {
  handleResize(e) {
    const width = window.innerWidth

    if (width > 767) {
      this.props.toggleMobile(false)
    } else {
      this.props.toggleMobile(true)
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this))
    window.addEventListener('load', this.handleResize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this))
    window.removeEventListener('load', this.handleResize.bind(this))
  }

  render() {
    return (
      <div className={styles.Container}>
        <SwipeableDrawer 
          variant={this.props.mobile ? 'temporary' : 'permanent'}
          className={styles.Drawer}
          onClose={this.props.closeDrawer}
          onOpen={this.props.openDrawer}
          anchor="left"
          open={this.props.mobile ? this.props.drawer : true}
        >
          <ListContainer />
        </SwipeableDrawer>

        <DetailContainer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drawer: state.drawer,
  mobile: state.mobile
})

const mapDispatchToProps = {
  openDrawer,
  closeDrawer,
  toggleMobile
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
