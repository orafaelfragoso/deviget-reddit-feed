import React, { Component } from 'react';
import styles from './stylesheets/AppContainer.module.scss';
import ListContainer from './ListContainer'
import DetailContainer from './DetailContainer'

class AppContainer extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <ListContainer />
        <DetailContainer />
      </div>
    );
  }
}

export default AppContainer;
