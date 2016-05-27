import fetch from 'isomorphic-fetch'

export const FETCH_TOPICS_REQUEST = 'FETCH_TOPICS_REQUEST'
export const FETCH_TOPICS_SUCCESS = 'FETCH_TOPICS_SUCCESS'
export const FETCH_TOPICS_FAILURE = 'FETCH_TOPICS_FAILURE'

export const FETCH_TOPIC_REQUEST = 'FETCH_TOPIC_REQUEST'
export const FETCH_TOPIC_SUCCESS = 'FETCH_TOPIC_SUCCESS'
export const FETCH_TOPIC_FAILURE = 'FETCH_TOPIC_FAILURE'

function fetchTopicsRequest(tab, page) {
  return {
    type: FETCH_TOPICS_REQUEST,
    tab,
    page
  }
}

function fetchTopicsSuccess(tab, page, json) {
  return {
    type: FETCH_TOPICS_SUCCESS,
    tab,
    page,
    topics: json.data,
    receivedAt: Date.now()
  }
}

function fetchTopicsFailure(tab, page, err) {
  return {
    type: FETCH_TOPICS_FAILURE,
    tab,
    page,
    err
  }
}

function fetchTopics(tab, page) {
  return dispatch => {
    dispatch(fetchTopicsRequest(tab, page))
    return fetch(`https://cnodejs.org/api/v1/topics?page=${page}&tab=${tab}`)
      .then(response => response.json())
      .then(json => dispatch(fetchTopicsSuccess(tab, page, json)))
      .catch(err=> dispatch(fetchTopicsFailure(tab, page, err)))
  }
}

export function fetchTopicsIfNeeded(tab, page) {
  return (dispatch, getState) => {
    const state = getState();
    const topics = state.topicsByTab[tab];
    if (!topics) {
      return dispatch(fetchTopics(tab, page))
    }
    if (topics.isFetching || topics.page == page) return
    return dispatch(fetchTopics(tab, page))
  }
}

function fetchTopicRequest(topicId) {
  return {
    type: FETCH_TOPIC_REQUEST,
    topicId
  }
}

function fetchTopicSuccess(topicId, json) {
  return {
    type: FETCH_TOPIC_SUCCESS,
    topicId,
    topic: json.data
  }
}

function fetchTopicFailure(topicId, err) {
  return {
    type: FETCH_TOPIC_FAILURE,
    topicId,
    err
  }
}

export function fetchTopic(topicId) {
  return dispatch => {
    dispatch(fetchTopicRequest(topicId))
    return fetch(`https://cnodejs.org/api/v1/topic/${topicId}`)
      .then(response => response.json())
      .then(json => dispatch(fetchTopicSuccess(topicId, json)))
      .catch(err => dispatch(fetchTopicFailure(topicId, err)))
  }
}