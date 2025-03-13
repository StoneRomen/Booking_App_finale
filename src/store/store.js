import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import hotelsReducer from "../redux/hotelsSlice"; 
import rootSaga from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { hotels: hotelsReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
