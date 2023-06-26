export interface IPokemonDetails {
    name: string;
    abilities: { ability: { name: string, url: string, } }[];
    stats: string[];
    forms: string[];
    game_indices: string[];
    moves: [];
    order: number;
    weight: number;
    height: number;
}