import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/posts.actions'
import styles from './stylesheets/ListContainer.module.scss'
import Header from '../components/Header'
import { RecyclerListView, DataProvider, LayoutProvider } from 'recyclerlistview/web'

class ListContainer extends Component {
  dataProvider = new DataProvider((r1, r2) => {
    return r1.data !== r2.data;
  })

  layoutProvider = new LayoutProvider(() => {
      return 'VSEL'
    }, (type, dim, index) => {
      switch(type) {
        default:
          dim.width = 300
          dim.height = 100
          break
      }
    }
  )

  componentDidMount() {
    this.props.getPosts(true)
  }

  renderItems(type, item) {
    return (
      <div className={styles.ListItem}>
        <div className={styles.ListItemBody}>
          <span className={styles.ListItemImage}>
            <img src={item.data.thumbnail} alt={item.data.title} />
          </span>
          <div className={styles.ListItemDetail}>
            <span className={styles.ListItemTitle}>{item.data.author}</span>
            <span className={styles.ListItemText}>{item.data.title}</span>
          </div>
        </div>
        <div className={styles.ListItemBottom}>
          <span className={styles.ListItemDismiss}>Dismiss</span>
          <span className={styles.ListItemComments}>{item.data.num_comments} comments</span>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.Container}>
        <Header title="Reddit Feed" />
        <RecyclerListView
          dataProvider={this.dataProvider.cloneWithRows(this.props.posts)}
          layoutProvider={this.layoutProvider}
          rowRenderer={this.renderItems.bind(this)}
          className={styles.List}
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

