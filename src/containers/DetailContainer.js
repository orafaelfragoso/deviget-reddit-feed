import React, { Component } from 'react';
import { connect } from 'react-redux'
import { openDrawer } from '../actions/drawer.actions'
import styles from './stylesheets/DetailContainer.module.scss';
import Header from '../components/Header'
import Paper from '@material-ui/core/Paper'

class DetailContainer extends Component {
  render() {
    const { mobile, openDrawer, selectedPost } = this.props

    return (
      <div className={styles.Container}>
        <Header title="Details" showMenu={mobile} onMenuClick={openDrawer} />
        {selectedPost && (
          <Paper className={styles.Content}>
            <p><img src={selectedPost.image} alt={selectedPost.description} className={styles.Image} /></p>
            <p className={styles.Title}>{selectedPost.title}</p>
            <p className={styles.Description}>{selectedPost.description}</p>
          </Paper>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  drawer: state.drawer,
  mobile: state.mobile,
  selectedPost: state.selectedPost
})

const mapDispatchToProps = {
  openDrawer
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailContainer)


