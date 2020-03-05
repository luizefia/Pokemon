import { Component, OnInit, Input } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent implements OnInit {

  id: string;
  pokemonModel;
  loadError: boolean = true;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  getPokemon(id) {
      this.pokemonService.getPokemonById(id).subscribe(result => {
      this.pokemonModel = result;
      this.pokemonModel.url = this.pokemonService.getPokemonImg(this.pokemonModel.id);     
      debugger 
    });
  }
  
  limparModel(pokemonModel){
    this.pokemonModel=null;
  }

  limparTexto(input: HTMLInputElement){
    input.value = '';
  }

}
