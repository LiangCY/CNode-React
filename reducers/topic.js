import {createReducer} from 'redux-act';

import {
  fetchTopics,
  fetchTopic
} from '../actions/topic'


const topicsByTab = createReducer({
  [fetchTopics.request]: (state, payload)=> {
    let tab = state[payload.tab] || {
        isFetching: false,
        topics: [],
        page: 1
      }
    let newTab = Object.assign({}, tab, {
      isFetching: true
    })
    return Object.assign({}, state, {
      [payload.tab]: newTab
    })
  },
  [fetchTopics.ok]: (state, payload)=> {
    let topics = state[payload.tab].topics || []
    return Object.assign({}, state, {
      [payload.tab]: {
        isFetching: false,
        topics: topics.concat(payload.data.data),
        page: payload.page
      }
    })
  },
  [fetchTopics.error]: (state, payload)=> {
    return Object.assign({}, state, {err: payload.message})
  }
}, {
  'all': {isFetching: false, topics: [], page: 1},
  'share': {isFetching: false, topics: [], page: 1},
  'ask': {isFetching: false, topics: [], page: 1},
  'job': {isFetching: false, topics: [], page: 1},
  'good': {isFetching: false, topics: [], page: 1}
})

const topic = createReducer({
  [fetchTopic.request]: (state, payload)=> {
    return state
  },
  [fetchTopic.ok]: (state, payload)=> {
    return Object.assign({}, state, payload.data)
  },
  [fetchTopic.error]: (state, payload)=> {
    return Object.assign({}, state, {err: payload.message})
  }
}, {})

const topicReducer = {
  topicsByTab,
  topic
}

export default topicReducer