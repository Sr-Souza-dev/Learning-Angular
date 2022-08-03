import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-title title="Title do Input"></app-title>
    <app-binding></app-binding>
    <app-diretivas>
      <\hr>
      <\hr>
      <\hr>
      <p>ng-Content FImm</p>
      <p>ng-Content FImm</p>
      <p>ng-Content FImm</p>
    </app-diretivas>

    <app-new-component></app-new-component>
    <app-input [contador]="cont"></app-input>                         <!-- Adiciona Um imput para o componente app-input -->
    
    <app-output (enviarDados)="setDados($event)"></app-output>        <!-- Utiliza o evento de output 'enviarDados' declarado no componente com a função 'setDados' que recebe um dado qualquer-->
    <br> <br>
    <ng-template [ngIf]="getDados">                                   <!-- Utilizando a variavel getDados para a construção de um novo componente caso haja dados-->
      <h3>{{getDados.nome}} -> {{getDados.idade}}</h3>
    </ng-template>

    <!-- ***** Serviços, http e observable ****** -->
    <app-food-list></app-food-list>
    <app-food-add></app-food-add>

    <!-- Formulário -->
    <app-forms></app-forms>
    <app-reative-form></app-reative-form>


    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'first-app';
  
  public cont:number = 10
  
  // ---- Output process -----
  public getDados: {nome: string, idade: number} | undefined      // Declarando a variavel que receberá o 'output' (A principio sendo Nula)
  public setDados(event: {nome: string, idade: number}){          // Definido o tipo de dados que a função recebe
    this.getDados = event;                                        // Passando o dado de output recebido para a variavel getDados
  }
}


