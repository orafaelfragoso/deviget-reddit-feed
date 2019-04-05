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
    return <div className={styles.ListItem}>{item.data.title}</div>
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

