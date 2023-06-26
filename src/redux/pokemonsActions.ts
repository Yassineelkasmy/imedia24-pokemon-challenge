import { IPokemon } from "../models/IPokemon";
import { IPokemonDetails } from "../models/IPokemonDetails";
import { PokemonActionTypes } from "./pokemonActionTypes";

export interface FetchPokemonsAction {
    type: typeof PokemonActionTypes.FETCH_POKEMONS_REQUEST,

}

export interface FetchMorePokemonsAction {
    type: typeof PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST,
    url: string,
}

export interface FetchMorePokemonDetailsAction {
    type: typeof PokemonActionTypes.FETCH_POKEMON_DETAILS_REQUEST,
    url: string,
}

export interface FetchPokemonsSuccessAction {
    type: typeof PokemonActionTypes.FETCH_POKEMONS_SUCCESS,
    payload: IPokemon[],
    next: string | null,
}

export interface FetchPokemonsDetailSuccessAction {
    type: typeof PokemonActionTypes.FETCH_POKEMON_DETAILS_SUCCESS,
    payload: IPokemonDetails,
}


export interface FetchPokemonsFailureAction {
    type: PokemonActionTypes.FETCH_POKEMONS_FAILURE,
    error: string,
}

export type PokemonsActions = FetchPokemonsAction | FetchMorePokemonsAction | FetchPokemonsSuccessAction | FetchPokemonsFailureAction | FetchMorePokemonDetailsAction | FetchPokemonsDetailSuccessAction;