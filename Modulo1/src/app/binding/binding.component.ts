import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {

  public interpolat:string = "Interpolation"

  public propertyCheck:boolean = false

  public evTitle: string = "Event B"
  public eventBd(evento: MouseEvent){
    console.log(evento)
    if(this.evTitle.length == 0){
      this.evTitle = "Event Name"
    }else{
      this.evTitle = ""
    }
  }
  
  public twoWay:string = ""

  constructor() { }
  ngOnInit(): void {}
}
