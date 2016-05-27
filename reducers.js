import {
  FETCH_TOPICS_REQUEST,
  FETCH_TOPICS_SUCCESS,
  FETCH_TOPICS_FAILURE,
  FETCH_TOPIC_REQUEST,
  FETCH_TOPIC_SUCCESS,
  FETCH_TOPIC_FAILURE
} from './actions'


function topics(state = {
  isFetching: false,
  items: [],
  page: 1
}, action) {
  switch (action.type) {
    case FETCH_TOPICS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        page: action.page
      })
    case FETCH_TOPICS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        items: state.items.concat(action.topics),
        page: action.page
      })
    case FETCH_TOPICS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        page: action.page
      })
    default:
      return state
  }
}

function topicsByTab(state = {}, action) {
  switch (action.type) {
    case FETCH_TOPICS_REQUEST:
    case FETCH_TOPICS_SUCCESS:
    case FETCH_TOPICS_FAILURE:
      return Object.assign({}, state, {
        [action.tab]: topics(state[action.tab], action)
      })
    default:
      return state
  }
}

function topic(state = {}, action) {
  switch (action.type) {
    case FETCH_TOPIC_REQUEST:
    case FETCH_TOPIC_SUCCESS:
    case FETCH_TOPIC_FAILURE:
      return Object.assign({}, state, action.topic)
    default:
      return state
  }
}

const rootReducer = {
  topicsByTab,
  topic
}

export default rootReducer