import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { fetchHotelsRequest, fetchHotelsSuccess, fetchHotelsFailure } from "../redux/hotelsSlice";

function* fetchHotelsSaga(action) {
    try {
        const response = yield call(axios.get, `http://localhost:5000/hotels?destination=${action.payload}`);
        yield put(fetchHotelsSuccess(response.data)); 
    } catch (error) {
        yield put(fetchHotelsFailure(error.message));
    }
}

export function* watchHotelsSaga() {
    yield takeLatest(fetchHotelsRequest, fetchHotelsSaga);
}
