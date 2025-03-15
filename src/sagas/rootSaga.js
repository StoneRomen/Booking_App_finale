import { all } from "redux-saga/effects";
import { watchHotelsSaga } from "./hotelsSaga";

function* rootSaga() {
  yield all([
    watchHotelsSaga(),
  ]);
}

export default rootSaga;
