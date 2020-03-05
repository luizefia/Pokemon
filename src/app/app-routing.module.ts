import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { HeaderComponent } from './header/header.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokeListSearchComponent } from './pokemon-list/poke-list-search/poke-list-search.component';


const routes: Routes = [
  { path: 'pokemonList', component: PokeListSearchComponent },
  { path: 'pokemonDetails', component: PokemonDetailsComponent },
  { path: 'pokemonSearch', component: PokemonSearchComponent },  
  { path: '**', component: HeaderComponent },//Implementar a tela de not found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
