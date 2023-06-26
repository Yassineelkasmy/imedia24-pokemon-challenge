import axios, { AxiosResponse } from "axios";
import { IPokemon } from "../models/IPokemon";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { FetchMorePokemonDetailsAction, FetchMorePokemonsAction, FetchPokemonsAction, FetchPokemonsDetailSuccessAction, FetchPokemonsFailureAction, FetchPokemonsSuccessAction } from "./pokemonsActions";
import { PokemonActionTypes } from "./pokemonActionTypes";
import { IPokemonDetails } from "../models/IPokemonDetails";



interface FetchPokemonsResponse {
    count: number,
    next: string | null,
    results: IPokemon[],
}

type FetchPokemonDetailsResponse = IPokemonDetails;


const getPokemons = () => axios.get<FetchPokemonsResponse>("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=30");

const getMorePokemons = (url: string) => axios.get<FetchPokemonsResponse>(url);

const getPokemonDetails = (url: string) => axios.get<FetchPokemonDetailsResponse>(url);

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


function* fetchMorePokemonsDetailsSaga({ url }: FetchMorePokemonDetailsAction) {


    try {
        const response = (yield call(getMorePokemons, url)) as AxiosResponse<FetchPokemonDetailsResponse>;

        const action: FetchPokemonsDetailSuccessAction = {
            type: PokemonActionTypes.FETCH_POKEMON_DETAILS_SUCCESS,
            payload: response.data,
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
    takeLatest(PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST, fetchMorePokemonsSaga),
    takeLatest(PokemonActionTypes.FETCH_POKEMON_DETAILS_REQUEST, fetchMorePokemonsDetailsSaga),
    ],
    );
}

export default pokemonsSaga;