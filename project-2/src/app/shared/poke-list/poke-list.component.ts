import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public pokeList:Array<any> = []
  private pokeBeckup:Array<any> = []

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe({
      next:     response => {this.pokeList = response.results; this.pokeBeckup = response.results},
      error:    error    => console.log("Errorr:",  error),
      complete: ()       => console.info("Complete")
    })
  }

  public getSearch(value: string){
    this.pokeList = this.pokeBeckup.filter(
      res => {
        return !res.name.indexOf(value.toLowerCase());
      }
    )
    console.log(value)
  }

}
