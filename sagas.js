import { takeEvery } from 'redux-saga'
import { put, call } from 'redux-saga/effects'

// after 1s this promise will be resolved
export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// worker saga
export function* incrementAsync() {
  // once we execute this yiled, it will return an promise
  // we cannot compare promise, so we need using call from redux-saga
  yield call(delay, 1000) // now here will return {PUT: {type: 'INCREMENT'}}
  yield put({ type: 'INCREMENT'}) // dispatch an action here
}

// watcher saga
export function* watchIncrementAsync () {
  yiled* takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
  console.log('hello sagas!')
}

