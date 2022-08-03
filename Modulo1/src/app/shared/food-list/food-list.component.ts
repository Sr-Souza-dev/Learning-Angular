import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  public foodList1: Array<string> = [];
  public foodList: Array<FoodList> = [];

  constructor(private foodListService:FoodListService) { }    //Adicionando um service na pagina 

  ngOnInit(): void {
    this.foodList1 = this.foodListService.getFoodList();       // Definindo que uma lista local será igual a do service

    // Subcribe
    this.foodListService.emitEvent.subscribe(                 // Inscrevendo em um evento (Fica ouvindo toda aleração/chamada do evento)
      res => alert(`Você Adicionou => ${res}`)                // Pega a resposta gerada pelo evento e emite um alerta
    )

    // Requisições Http Get
    this.foodListService.foodList().subscribe({               // Inscrevendo no evento retornado por "foodList" até que o complete seja acionado
      error: (e)=>e,                                          // Decidindo o que fazer com o erro (caso haja)
      next: (listObject) => {this.foodList = listObject},     // Decidindo o que fazer com o resultado do get (atribuindo a 'foodList')
      complete: () => console.info("Complete")                // Mensagem de sucesso quando toda execução do evento for finalizada
    })
  }
  // Requisições Http Delete
  public foodListDelete(id:number){
    this.foodListService.foodListDelete(id).subscribe({
      error: (e)=>e,
      next: (object) => console.log(`Excluir: ${object}`),
      complete: ()=>console.info("Complete")
    })
  }
  // Requisições Http Put (Edit)
  public foodlistPut(value:string, id:number){
    this.foodListService.foodListPut(value,id).subscribe({
      error: (e)=>e,
      next: (object) => console.log(`Excluir: ${object}`),
      complete: ()=>console.info("Complete")
    })
  }

}
