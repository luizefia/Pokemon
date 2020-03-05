import { Component, OnInit } from '@angular/core';
import { PokemonListResult, PokemonModel } from 'src/app/pokemon-details/pokemonModel';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-poke-list-search',
  templateUrl: './poke-list-search.component.html',
  styleUrls: ['./poke-list-search.component.scss']
})
export class PokeListSearchComponent implements OnInit {

  numeroInicial: number;
  numeroFinal: number;
  pokeListaCru: PokemonListResult;
  pokeLista: Array<PokemonModel>;

  constructor(private pokeService: PokemonService) { }

  ngOnInit(): void {
  }
  
  getAll(numeroInicial, numeroFinal) {
    this.pokeService.getAllPokemonBySeason(numeroInicial, numeroFinal)
      .subscribe(result => {
        this.pokeListaCru = result;
        this.pokeLista = this.pokeListaCru.results;
      });
  }
}
