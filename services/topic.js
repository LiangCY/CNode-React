import fetch from 'isomorphic-fetch'

export const getTopics = function ({tab='all', page=1}) {
  return fetch(`https://cnodejs.org/api/v1/topics?tab=${tab}&page=${page}`)
    .then(response => response.json())
    .then(function (data) {
      return {
        tab,
        page,
        data
      }
    })
}

export const getTopic = function (topicId) {
  return fetch(`https://cnodejs.org/api/v1/topic/${topicId}`)
    .then(response => response.json())
}