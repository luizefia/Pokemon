import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel, PokemonListResult } from './pokemon-details/pokemonModel';

const urlBase: string = 'https://pokeapi.co/api/v2/pokemon/';
const urlImgBase: string = 'https://pokeres.bastionbot.org/images/pokemon/';
const urlAllBase: string = 'https://pokeapi.co/api/v2/pokemon?offset=';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) { }

  getPokemonById(id: string) {
    const urlFinal: string = urlBase + id;
    return this.httpClient.get<PokemonModel>(urlFinal);
    
  }

  getPokemonImg(id: string) {
    const urlImgFinal: string = (urlImgBase + id + ".png");
    return urlImgFinal;
  }

  /*getAllPokemonBySeason(startNumber, finalNumber: number) {
    const urlAllFinal: string = urlAllBase + (startNumber-1) + "&limit=" + (finalNumber-2);
    return this.httpClient.get(urlAllFinal);
  }*/

  getAllPokemonBySeason(startNumber, finalNumber: number) {
    const urlAllFinal: string = urlAllBase + (startNumber-1) + "&limit=" + (finalNumber);
    return this.httpClient.get<PokemonListResult>(urlAllFinal);
    debugger

  }
}
