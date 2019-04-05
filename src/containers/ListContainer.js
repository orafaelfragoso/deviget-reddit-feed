import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts.actions'
import styles from './stylesheets/ListContainer.module.scss'
import Header from '../components/Header'
import ScrollList from '../components/ScrollList'

class ListContainer extends Component {
  componentDidMount() {
    this.props.getPosts(true)
  }

  renderItems() {
    return this.props.posts.map(item => (
      <div key={`${item.kind}_${item.data.id}`}>{item.data.title}</div>
    ))
  }

  render() {
    return (
      <div className={styles.Container}>
        <Header title="Reddit Feed" />
        <ScrollList
          render={this.renderItems()}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = {
  getPosts: fetchPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)

