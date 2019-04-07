import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePost, selectPost, readPost, fetchMorePosts } from '../actions/posts.actions'
import styles from './stylesheets/ListContainer.module.scss'
import Header from '../components/Header'
import List from '../components/List'

class ListContainer extends Component {

  componentWillMount() {
    this.props.getPosts(true)
  }

  _loadMorePosts() {
    this.props.getMorePosts(this.props.page)
  }

  render() {
    return (
      <div className={styles.Container}>
        <Header title="Reddit Feed" />
        <List 
          onReachedThreshold={this._loadMorePosts.bind(this)}
          isLoading={this.props.loading}
          hasMoreItems={this.props.page !== null}
          items={this.props.posts}
          onClickItem={(item) => {
            this.props.selectPost(item)
            this.props.readPost(item.id)
          }}
          onDismissItem={this.props.deletePost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts,
  loading: state.loader,
  page: state.page
})

const mapDispatchToProps = {
  getPosts: fetchPosts,
  deletePost,
  selectPost,
  readPost,
  getMorePosts: fetchMorePosts
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)

