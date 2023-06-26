import axios, { AxiosResponse } from "axios";
import { IPokemon } from "../models/IPokemon";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FetchMorePokemonsAction, FetchPokemonsAction, FetchPokemonsFailureAction, FetchPokemonsSuccessAction } from "./pokemonsActions";
import { PokemonActionTypes } from "./pokemonActionTypes";



interface FetchPokemonsResponse {
    count: number,
    next: string | null,
    results: IPokemon[],
}


const getPokemons = () => axios.get<FetchPokemonsResponse>("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50");

const getMorePokemons = (url: string) => axios.get<FetchPokemonsResponse>(url);

function* fetchPokemonsSaga() {


    try {
        const response = (yield call(getPokemons)) as AxiosResponse<FetchPokemonsResponse>;

        const action: FetchPokemonsSuccessAction = {
            type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
            payload: response.data.results,
            next: response.data.next,
        };

        yield put(
            action,
        )
    } catch (e: any) {
        const action: FetchPokemonsFailureAction = {
            type: PokemonActionTypes.FETCH_POKEMONS_FAILURE,
            error: e.message,
        }
    }
}


function* fetchMorePokemonsSaga({ url }: FetchMorePokemonsAction) {

    // const action: FetchMorePokemonsAction = {
    //     type: PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST,
    //     url: url,
    // }

    // yield put(action);

    try {
        const response = (yield call(getMorePokemons, url)) as AxiosResponse<FetchPokemonsResponse>;

        const action: FetchPokemonsSuccessAction = {
            type: PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
            payload: response.data.results,
            next: response.data.next,
        };

        yield put(
            action,
        )
    } catch (e: any) {
        const action: FetchPokemonsFailureAction = {
            type: PokemonActionTypes.FETCH_POKEMONS_FAILURE,
            error: e.message,
        }
    }
}


function* pokemonsSaga() {
    yield all([takeLatest(PokemonActionTypes.FETCH_POKEMONS_REQUEST, fetchPokemonsSaga),
    takeLatest(PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST, fetchMorePokemonsSaga),],
    );
}

export default pokemonsSaga;