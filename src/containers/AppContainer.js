import React, { Component } from 'react'
import styles from './stylesheets/AppContainer.module.scss'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import ListContainer from './ListContainer'
import DetailContainer from './DetailContainer'

class AppContainer extends Component {
  state = {
    openDrawer: false
  }

  handleDrawerToggle() {
    this.setState({ openDrawer: !this.state.openDrawer })
  }

  render() {
    return (
      <div className={styles.Container}>
        <Drawer 
          variant="temporary"
          open={this.state.openDrawer}
          anchor="left"
          className={styles.Drawer}
          onClose={this.handleDrawerToggle.bind(this)}
        >
          <ListContainer />
        </Drawer>

        <Hidden only={['xs', 'sm']} implementation="css">
          <Drawer 
            variant="permanent"
            className={styles.Drawer}
            open
          >
            <ListContainer />
          </Drawer>
        </Hidden>

        <DetailContainer onDrawerClick={this.handleDrawerToggle.bind(this)} />
      </div>
    );
  }
}

export default AppContainer;
