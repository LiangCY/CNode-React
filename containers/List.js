import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchTopics} from '../actions/topic'
import ListItem from '../components/ListItem'

class List extends Component {

  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    let {dispatch, tab, topics, page} = this.props
    if (topics.length === 0) {
      dispatch(fetchTopics({tab, page}))
    }
  }

  loadMore() {
    let {dispatch, tab, page} = this.props
    dispatch(fetchTopics({tab, page: page + 1}))
  }

  render() {

    const {topics=[], isFetching} = this.props
    let bottom
    if (isFetching) {
      bottom = (
        <div>Loading</div>
      )
    } else {
      bottom = (
        <button onClick={this.loadMore}>load more</button>
      )
    }
    return (
      <div>
        <ul>
          {topics.map((topic)=> {
            return (
              <ListItem key={topic.id}
                        id={topic.id}
                        title={topic.title}/>
            )
          })}
        </ul>
        {bottom}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const tab = state.routing.locationBeforeTransitions.pathname.substr(1) || 'all'
  const {
    isFetching,
    topics,
    page
  } = state.topicsByTab[tab] || {
    isFetching: false,
    topics: [],
    page: 1
  }
  return {
    tab,
    topics,
    page,
    isFetching
  }
}

export default connect(mapStateToProps)(List)