import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})

export class TitleComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() public title:string = "New Project Title"      // Torna 'title' como um atributo do tamplate (pode ser passado no momento da referência)

  constructor() { }                                       // Construtor da class/componente 

  // ----------- Ciclos de Vida -----------
  ngOnInit(): void {}                                     // Quando a class é inicializada (após o construtor)
  ngOnChanges(changes: SimpleChanges): void {}            // Quando algun Input é chamado ou alterado
  
  // OS escopos abaixo são sempre exibidos quando a tela é carregada
  ngDoCheck(): void {}                                    // É chamado sempre que a detecção de alteração em qualquer componente é executada (é chamado imediatamente após ngOnChanges() e ngOnInit())
  ngAfterContentInit(): void {}                           // É executado apenas uma vez após ngOnInit e ngDoCheck
  ngAfterContentChecked(): void {}                        // É chamado diretamente após ngAfterContentInit (é sempre chamado após o ngDoCheck)
  ngAfterViewInit(): void {}                              // É chamado apenas uma vez após ngAfterContentChecked (é chamado depois que todos os componentes filhos são inicializados e verificados)
  ngAfterViewChecked(): void {}                           // É chamado após ngAfterContentInit (é chamado após cada ngAfterContentChecked subsequente )
  
  ngOnDestroy(): void {}                                  // É chamado toda vez que um elemento for destruido/ocultado da tela 
}
