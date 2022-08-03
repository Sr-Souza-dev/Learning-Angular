import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public isLoading:boolean = true
  public beError:boolean = false

  public pokemon: any
  private pokemonUrl:string = "https://pokeapi.co/api/v2/pokemon"
  private nameUrl:string = "https://pokeapi.co/api/v2/pokemon-species"

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon(){

    const id = this.activatedRoute.snapshot.params['id'];
    const pokemon = this.pokeService.getPokemonInfo(`${this.pokemonUrl}/${id}`);
    const name = this.pokeService.getPokemonInfo(`${this.nameUrl}/${id}`);

    forkJoin([pokemon, name]).subscribe({
      next: response => {
        this.pokemon = response;
        this.isLoading = false
      },
      error: error => {
        this.beError = true
      },
      complete: () => console.log("Concluido com sucesso!")
    })
    return 
  }
}
