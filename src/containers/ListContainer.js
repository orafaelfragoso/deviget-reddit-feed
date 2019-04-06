import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, deletePost } from '../actions/posts.actions'
import styles from './stylesheets/ListContainer.module.scss'
import Header from '../components/Header'
import List from '../components/List'
import ListItem from '../components/ListItem'

class ListContainer extends Component {

  componentWillMount() {
    this.props.getPosts(true)
  }

  renderItems() {
    return this.props.posts.map(item => {
      return (
        <ListItem
          image={item.data.thumbnail}
          title={item.data.author}
          description={item.data.title}
          comments={item.data.num_comments}
          id={item.data.id}
          key={item.data.id}
          delayTime={200}
          isMounted={true}
          onClick={() => {}}
          onDismiss={this.props.deletePost}
        />
      )
    })
  }

  render() {
    return (
      <div className={styles.Container}>
        <Header title="Reddit Feed" />
        <List>
          {this.renderItems()}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
})

const mapDispatchToProps = {
  getPosts: fetchPosts,
  deletePost: deletePost
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)

