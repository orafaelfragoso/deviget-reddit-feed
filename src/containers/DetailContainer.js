import React, { Component } from 'react';
import { connect } from 'react-redux'
import { openDrawer } from '../actions/drawer.actions'
import styles from './stylesheets/DetailContainer.module.scss';
import Header from '../components/Header'

class DetailContainer extends Component {
  render() {
    return (
      <div className={styles.Container}>
        <Header title="Details" showMenu={this.props.mobile} onMenuClick={this.props.openDrawer} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drawer: state.drawer,
  mobile: state.mobile
})

const mapDispatchToProps = {
  openDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)


