import { render, screen } from "@testing-library/react";
import PokemonCard from "./PokemonCard";
import { IPokemon } from "../models/IPokemon";
import TestWrapper from "../shared/testUtils";




test('Pokemon card', () => {
    const pokemon: IPokemon = { name: "pokemon", url: "www.pokemon.com" }
    render(<TestWrapper>
        <PokemonCard pokemon={pokemon}></PokemonCard>
    </TestWrapper>)

    expect(screen.getByText(pokemon.name.toUpperCase())).toBeVisible();

}); 