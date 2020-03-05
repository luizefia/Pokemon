import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PokemonModel } from '../pokemon-details/pokemonModel';
import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit, OnChanges {
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.loadError){
      debugger
      this.loadError=true;
    }
  }
  @Input()
  loadError: boolean=false;
  
  constructor(private service: PokemonService) { }

  ngOnInit(): void {          
  }

}
