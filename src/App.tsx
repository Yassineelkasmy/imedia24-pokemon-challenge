import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import { PokemonActionTypes } from './redux/pokemonActionTypes';
import { AppState } from './redux/rootReducer';
import InfiniteScroll from 'react-infinite-scroll-component';


function App() {
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
    <div className='bg-slate-200 h-full min-h-screen'>
      <InfiniteScroll
        dataLength={data.length}
        next={() => dispatch({ type: PokemonActionTypes.FETCH_MORE_POKEMONS_REQUEST, url: next })}
        hasMore={next != null}
        loader={<p>Loading...</p>}
        endMessage={<p>No more data to load.</p>}
      >

        {loading ? (
          <div >Loading...</div>
        ) : error ? (
          <div>Error</div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 space-x-5 space-y-5'>
            {data?.map((pokemon, index) => (
              <div className='h-48 border-2 border-black rounded-lg text-center text-2xl' key={pokemon.name}>
                {++index}. {pokemon.name}
              </div>
            ))}
          </div>
        )}

      </InfiniteScroll>
    </div>
  );
}



export default App;