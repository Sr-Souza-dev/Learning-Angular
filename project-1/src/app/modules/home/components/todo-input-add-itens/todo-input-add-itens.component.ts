import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitItemTaskList = new EventEmitter();

  public addItemTAskList:string = ""

  public submitItemTaskList(){
    this.addItemTAskList = this.addItemTAskList.trim()
    if(this.addItemTAskList.length != 0){
      this.emmitItemTaskList.emit(this.addItemTAskList)
      this.addItemTAskList=""
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
