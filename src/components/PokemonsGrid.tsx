import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppState } from "../redux/rootReducer";
import { PokemonActionTypes } from "../redux/pokemonActionTypes";
import { InfinitySpin } from "react-loader-spinner";
import PokemonCard from "./PokemonCard";



const PokemonsGrid = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: PokemonActionTypes.FETCH_POKEMONS_REQUEST,
        });
    }, []);

    const { loading, loadingMore, data, error, next } = useSelector(
        (state: AppState) => state.pokemons
    );

    return (
        <InfiniteScroll
            dataLength={data.length}
            next={() => dispatch({ type: PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST, url: next })}
            hasMore={next != null}
            loader={<div className="text-center" ><InfinitySpin
                width='200'
                color="#800080"
            />
            </div>}
            endMessage={<p>No more data to load.</p>}
        >

            {error ? (
                <div>Error</div>
            ) : (
                <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-x-5 space-y-5'>
                    {data?.map((pokemon, index) => (
                        <PokemonCard pokemon={pokemon}></PokemonCard>
                    ))}
                </div>
            )}

        </InfiniteScroll>
    );
}


export default PokemonsGrid;