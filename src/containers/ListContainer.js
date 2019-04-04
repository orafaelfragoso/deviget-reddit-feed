import React, { Component } from 'react';
import styles from './stylesheets/ListContainer.module.scss';
import Header from '../components/Header'

class ListContainer extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Header title="Reddit Feed" />
      </div>
    );
  }
}

export default ListContainer;

