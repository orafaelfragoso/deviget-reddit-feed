import React, { Component } from 'react';
import styles from './stylesheets/DetailContainer.module.scss';
import Header from '../components/Header'

class DetailContainer extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Header title="Details" showMenu={true} onMenuClick={this.props.onDrawerClick} />
      </div>
    );
  }
}

export default DetailContainer;


