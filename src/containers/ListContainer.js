import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
  fetchPosts, 
  deletePost, 
  selectPost, 
  readPost, 
  fetchMorePosts,
  deleteAllPosts,
  refreshPosts
} from '../actions/posts.actions'
import styles from './stylesheets/ListContainer.module.scss'
import Header from '../components/Header'
import List from '../components/List'
import ListItem from '../components/ListItem'

class ListContainer extends Component {

  componentWillMount() {
    this.props.getPosts(true)
  }

  _loadMorePosts() {
    this.props.getMorePosts(this.props.page)
  }

  renderItems() {
    return this.props.posts.map(item => {
      return (
        <ListItem
          post={item}
          key={item.id}
          onClick={() => {
            this.props.selectPost(item)
            this.props.readPost(item.id)
          }}
          onDismiss={this.props.deletePost}
        />
      )
    })
  }

  render() {
    return (
      <div className={styles.Container}>
        <Header 
          title="Reddit Feed" 
          showRefresh={true} 
          showDelete={true}
          onRefreshClick={this.props.refreshPosts}
          onDeleteClick={this.props.deleteAllPosts}
        />
        <List 
          threshold={100}
          onReachedThreshold={this._loadMorePosts.bind(this)}
          isLoading={this.props.loading}
          hasMoreItems={this.props.page !== null}
        >
          {this.renderItems()}
        </List>
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
  getMorePosts: fetchMorePosts,
  refreshPosts,
  deletePost,
  deleteAllPosts,
  selectPost,
  readPost
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)

