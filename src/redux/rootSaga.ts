import { all, fork } from "redux-saga/effects";
import pokemonsSaga from "./pokemonsSaga";

export function* rootSaga() {
    yield all([fork(pokemonsSaga)]);
}
