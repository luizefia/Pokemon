export interface PokemonModel{
    id: number;
    name: string;    
    url: string;
}
export interface PokemonListResult{
    count: number;
    next: string;
    previous: string;
    results: Array<PokemonModel>; 
}