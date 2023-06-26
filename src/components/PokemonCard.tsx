import { IPokemon } from "../models/IPokemon";
import { motion } from "framer-motion";

interface PokemonCardProps {
    pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {

    return (

        <motion.div whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, animationDuration: "10s" }} className='flex flex-col justify-center h-48 border-2 border-black rounded-lg text-center text-2xl tracking-wider transition-all hover:shadow-2xl hover:cursor-pointer hover:bg-slate-300' key={pokemon.name}>
            <p className="">{pokemon.name.toUpperCase()}</p>
        </motion.div>


    )

};


export default PokemonCard;