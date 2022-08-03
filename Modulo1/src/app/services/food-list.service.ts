import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FoodList } from '../module/food-list';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  // Trabalhando com service e compartilhamento de dados via service
  private list:Array<string> = [
    "X Bacon",
    "Feijão",
    "Ovo"
  ]
  public getFoodList(){
    return this.list;
  }
  public foodListAdd(item:string){
    this.list.push(item)
    this.foodListAlert(item)  // Chamando a função que emite um evento
  }

  // Trabalhando com Subscribe (Se inscrever em um evento criado/emitido)
  public emitEvent = new EventEmitter()
  public foodListAlert(value: string){
    this.emitEvent.emit(value)            // Emitindo um evento e passando o value como parametro de retorno
  }

  // ---- Requisições http ----
  private url:string = "http://localhost:3000/"         // Endereço do servidor backend
  constructor(private http: HttpClient) { }             // Definido a variavel http que tem a capacidade 'Angular' para realizar requisições
  // Get
  public foodList() : Observable<Array<FoodList>>{                          // Criando uma função que retorna um evento 'obsevable'
    return this.http.get<Array<FoodList>>(this.url + "list-food")           // Retornando um evento
    .pipe(next=>next, error=>error)                                         // O pipe serve para realizar atividades antes de retornar os resultados/erros (sem ele o codigo funcionará normalmente)
  }
  // Post
  public foodListAdd1(item:string) : Observable<FoodList>{
    return this.http.post<FoodList>(this.url + "list-food", {nome: item})
    .pipe(next=>next, error=>error)    
  }
  // Put(Edit)
  public foodListPut(value:string,id:number) : Observable<FoodList>{
    return this.http.put<FoodList>(this.url + "list-food/"+id, {nome: value})
    .pipe(next=>next, error=>error)    
  }
  // Delete
  public foodListDelete(id:number) : Observable<FoodList>{
    return this.http.delete<FoodList>(this.url + "list-food/"+id)
    .pipe(next=>next, error=>error)    
  }
}
