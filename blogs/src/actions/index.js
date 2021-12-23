import _ from 'lodash'
import jsonPlaceHolder from "../apis/jsonPlaceHolder"

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts")

  dispatch({ type: "FETCH_POSTS", payload: response.data })
}

export const fetchUser = (userId) => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`)

  dispatch({ type: "FETCH_USER", payload: response.data })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())
  
  /* const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(userId => dispatch(fetchUser(userId))) */

  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(userId => dispatch(fetchUser(userId)))
    .value()
}

/* 
//lodash memoized version
export const fetchUser = (userId) => dispatch => _fetchUser(userId, dispatch)
const _fetchUser = _.memoize(async (userId, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${userId}`)

  dispatch({ type: "FETCH_USER", payload: response.data })
}) */