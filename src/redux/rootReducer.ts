import { combineReducers } from "redux";
import PokemonsReducer from "./pokemonsReducer";

const rootReducer = combineReducers({
    pokemons: PokemonsReducer,
})

export type AppState = ReturnType<typeof rootReducer>;


export default rootReducer;