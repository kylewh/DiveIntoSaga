import { delay } from 'redux-saga'
import { put, call, takeEvery } from 'redux-saga/effects'

// worker saga
export function* incrementAsync() {
  // once we execute this yiled, it will return an promise
  // we cannot compare promise, so we need using call from redux-saga
  yield call(delay, 1000) // now here will return {PUT: {type: 'INCREMENT'}}
  yield put({ type: 'INCREMENT'}) // dispatch an action here
}

// watcher saga
export function* watchIncrementAsync () {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga() {
  console.log('hello sagas!')
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchIncrementAsync()
  ]
}
