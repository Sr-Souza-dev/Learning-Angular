import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  // -------- Diretivas Estruturais ------------
  public list:Array<{nome:string}> = [{nome:"Gabriel Souza"}, {nome:"Daniele S"}, {nome:"Felipe"}]

  // -------- Diretivas de Atributos ------------
  public height:string = "20px"
  public nome:string = ""
  public date:Date = new Date()

  constructor() { }

  // Variaveis que fica alterando seu estado para fazer testes
  public condition:boolean = true
  ngOnInit(): void {
    setInterval(()=>{
      console.log("Foi -> ", this.condition)
      this.condition = !this.condition

      if(this.height == "20px"){
        this.height = "80px"
      } else{
        this.height = "20px"
      }
    }, 3000)
  }

}
