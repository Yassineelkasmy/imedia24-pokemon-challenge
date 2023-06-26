import { IPokemon } from "../models/IPokemon";
import { IPokemonDetails } from "../models/IPokemonDetails";
import { PokemonActionTypes } from "./pokemonActionTypes";
import * as actions from "./pokemonsActions";

export interface PokemonsState {
    loading: boolean,
    loadingMore: boolean,
    loadingPokemonDetails: boolean,
    data: IPokemon[],
    currentPokemonDetails: IPokemonDetails | null,
    count: number,
    next: string | null,
    error: string | null
}

const initialState: PokemonsState = {
    loading: false,
    loadingMore: false,
    loadingPokemonDetails: false,
    currentPokemonDetails: null,
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



        case PokemonActionTypes.FETCH_POKEMON_DETAILS_REQUEST:
            return {
                ...state,
                loadingPokemonDetails: true,
                error: null,
            }

        case PokemonActionTypes.FETCH_POKEMON_DETAILS_SUCCESS:
            return {
                ...state,
                loadingPokemonDetails: false,
                currentPokemonDetails: action.payload,
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