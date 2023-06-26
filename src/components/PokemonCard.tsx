import { IPokemon } from "../models/IPokemon";

interface PokemonCardProps {
    pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    return (
        <div className='flex flex-col justify-center h-48 border-2 border-black rounded-lg text-center text-2xl tracking-wider hover:z-10 hover:-translate-y-3 transition-all hover:shadow-2xl hover:cursor-pointer hover:bg-slate-300' key={pokemon.name}>
            <p className="">{pokemon.name.toUpperCase()}</p>
        </div>
    )

};


export default PokemonCard;