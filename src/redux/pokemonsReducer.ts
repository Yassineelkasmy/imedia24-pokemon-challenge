import { IPokemon } from "../models/IPokemon";
import { PokemonActionTypes } from "./pokemonActionTypes";
import * as actions from "./pokemonsActions";

export interface PokemonsState {
    loading: boolean,
    loadingMore: boolean,
    data: IPokemon[],
    count: number,
    next: string | null,
    error: string | null
}

const initialState: PokemonsState = {
    loading: false,
    loadingMore: false,
    data: [],
    count: 0,
    next: null,
    error: null,
}

const PokemonsReducer = (state = initialState, action: actions.PokemonsActions) => {

    switch (action.type) {

        case PokemonActionTypes.FETCH_POKEMONS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                data: [...state.data, ...action.payload],
                next: action.next,
            }

        case PokemonActionTypes.FETCH_POKEMONS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            }

        case PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST:
            return {
                ...state,
                loadingMore: true,
                error: null,
            }


        case PokemonActionTypes.FETCH_POKEMONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            }

        default:
            return state;

    }


}


export default PokemonsReducer;