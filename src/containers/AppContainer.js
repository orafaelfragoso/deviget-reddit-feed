import React, { Component } from 'react'
import styles from './stylesheets/AppContainer.module.scss'
import Drawer from '@material-ui/core/Drawer'
import ListContainer from './ListContainer'
import DetailContainer from './DetailContainer'

class AppContainer extends Component {
  state = {
    openDrawer: false,
    isMobile: false
  }

  handleDrawerToggle() {
    this.setState({ openDrawer: !this.state.openDrawer })
  }

  handleResize(e) {
    const width = window.innerWidth

    if (width > 767) {
      this.setState({isMobile: false})
    } else {
      this.setState({isMobile: true})
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
        <Drawer 
          variant={this.state.isMobile ? 'temporary' : 'permanent'}
          className={styles.Drawer}
          onClose={this.handleDrawerToggle.bind(this)}
          anchor="left"
          open={this.state.isMobile ? this.state.openDrawer : true}
        >
          <ListContainer />
        </Drawer>

        <DetailContainer onDrawerClick={this.handleDrawerToggle.bind(this)} />
      </div>
    );
  }
}

export default AppContainer;
