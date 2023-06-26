import { useState, Fragment } from "react";
import { IPokemon } from "../models/IPokemon";
import { motion } from "framer-motion";
import { Dialog, Transition } from '@headlessui/react'
interface PokemonCardProps {
    pokemon: IPokemon;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (

        <>
            <motion.div
                onClick={openModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.8 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, animationDuration: "10s" }} className='flex flex-col justify-center h-48 border-2 border-black rounded-lg text-center text-2xl tracking-wider transition-all hover:shadow-2xl hover:cursor-pointer hover:bg-slate-300' key={pokemon.name}>
                <p className="">{pokemon.name.toUpperCase()}</p>
            </motion.div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 capitalize"
                                    >
                                        {pokemon.name}
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Pokemon Desckription
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 w-full text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>


    )

};


export default PokemonCard;