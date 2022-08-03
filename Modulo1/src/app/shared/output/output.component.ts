import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter()           // Declarando um evento de saída (deixa dados para serem coletados no componente 'pai')
  public list:Array<{nome:string, idade:number}> = [
    {nome:"Gabriel", idade:21},
    {nome:"Daniele", idade:21},
    {nome:"Daniel", idade:21}]

  constructor() { }

  ngOnInit(): void {}

  public getDados(event:number){
    this.enviarDados.emit(this.list[event])                   // Emite um alerta para o componente 'pai' dizendo que tem dados disponíveis
  }

}
