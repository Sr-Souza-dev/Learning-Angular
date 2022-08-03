import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodList:FoodListService) { }

  public listAddItem(value:string){
   // this.foodList.foodListAdd(value)            // Utilizando o service para estabelecer uma comunicação entre serviços

   // Requisições Http Post
   this.foodList.foodListAdd1(value).subscribe({              // Inscrevendo no evento retornado por "foodList" até que o complete seja acionado
    error: (e)=>e,                                            // Decidindo o que fazer com o erro (caso haja)
    next: object => object,                                   // Decidindo o que fazer com o resultado do get
    complete: () => console.info("Complete")                  // Mensagem de sucesso quando toda execução do evento for finalizada
  })
  }
    
  ngOnInit(): void {}
}
