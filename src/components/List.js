import React, { Component } from 'react'
import AnimatedSpinner from '../components/AnimatedSpinner'
import './stylesheets/List.scss'
import { VariableSizeList } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import ListItem from './ListItem'

class List extends Component {
  _renderItems({index, style}) {
    const item = this.props.items[index]

    return (
      <ListItem 
        post={item} 
        style={style}
        onDismiss={this.props.onDismissItem} 
        onClick={() => {
          this.props.onClickItem(item)
        }} 
      />
    )
  }

  _isItemLoaded(index) {
    return !this.props.isLoading && index < this.props.items.length - 1 && this.props.hasMoreItems
  }

  async _loadMoreItems() {
    if (this.props.isLoading) {
      return function() {}
    }

    await this.props.onReachedThreshold()
  }

  render() {
    return (
      <React.Fragment>
        <AnimatedSpinner show={this.props.isLoading} />
        <InfiniteLoader 
          isItemLoaded={this._isItemLoaded.bind(this)}
          itemCount={this.props.items.length}
          loadMoreItems={this._loadMoreItems.bind(this)}
        >
          {({ onItemsRendered, ref }) => (
            <VariableSizeList
              className="list"
              itemCount={this.props.items.length}
              onItemsRendered={onItemsRendered}
              ref={ref}
              width={300}
              height={window.innerHeight}
              itemSize={(index) => 100}
            >
              {this._renderItems.bind(this)}
            </VariableSizeList>
          )}
        </InfiniteLoader>
      </React.Fragment>
    )
  }
} 

export default List
