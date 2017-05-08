import { delay } from 'redux-saga'
import { put, call, takeEvery, takeLatest } from 'redux-saga/effects'

// worker saga
export function* incrementAsync() {
  // once we execute this yiled, it will return an promise
  // we cannot compare promise, so we need using call from redux-saga
  yield call(delay, 1000) // now here will return {PUT: {type: 'INCREMENT'}}
  // Call runs a function. If it returns a promise, pauses the saga until the promise is resolved.
  yield put({ type: 'INCREMENT'}) // dispatch an action here
}

// watcher saga
export function* watchIncrementAsync () {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync)
  // HEYYYYY! Here's the point: no matter how much times we click the button quickly ( make sure that interval between every click is less than the time we set)
  // It will only take the last async dispatch !
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
