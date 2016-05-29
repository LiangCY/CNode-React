import {createActionAsync} from 'redux-act-async'

import {FETCH_TOPICS, FETCH_TOPIC} from '../constants/ActionTypes'
import {getTopics, getTopic} from '../services/topic'

export const fetchTopics = createActionAsync(FETCH_TOPICS, getTopics);

export const fetchTopic = createActionAsync(FETCH_TOPIC, getTopic);