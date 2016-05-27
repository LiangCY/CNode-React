import React, {Component} from 'react'
import {connect} from 'react-redux'

import {fetchTopic} from '../actions'

class Topic extends Component {

  componentDidMount() {
    const {dispatch, topicId} = this.props;
    dispatch(fetchTopic(topicId))
  }

  render() {
    const topic = this.props.topic;
    console.log(topic)
    if (!topic.id) {
      return (
        <div>
          {this.props.params.id}
        </div>
      )
    }
    return (
      <div dangerouslySetInnerHTML={{__html:topic.content}}>

      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  const topicId = ownProps.params.id;
  const topic = state.topic;
  return {
    topicId,
    topic
  }
}

export default connect(mapStateToProps)(Topic)