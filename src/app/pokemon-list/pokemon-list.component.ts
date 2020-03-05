import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { PokemonModel } from '../pokemon-details/pokemonModel';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.pokeLista)
      this.findId(this.pokeLista);
  }

  @Input()
  pokeLista: Array<PokemonModel>;
  pokeModel: PokemonModel;
  listaPokemonResult: Array<PokemonModel>;

  constructor(private service: PokemonService) {
    this.listaPokemonResult = new Array<PokemonModel>();
  }

  ngOnInit(): void { }

  findId(pokeLista) {
    this.pokeLista.forEach(element => {
      this.service.getPokemonById(element.name).subscribe(result => {
        this.pokeModel = result;
        this.pokeModel.url = this.service.getPokemonImg(this.pokeModel.id.toString());
        this.listaPokemonResult.push(this.pokeModel);
      });
    });
  }
}




