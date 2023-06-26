import rootReducer from "./rootReducer";
import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));


sagaMiddleware.run(rootSaga);

export default store;

