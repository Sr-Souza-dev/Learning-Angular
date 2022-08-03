import { Component, DoCheck, OnInit} from '@angular/core';

// Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck, OnInit{

  public taskList: Array<TaskList> = []

  constructor() { }
  ngOnInit(): void {
    this.taskList = JSON.parse(localStorage.getItem("list") || '[]')
  }
  ngDoCheck(): void {
    if(this.taskList.length != 0){
      this.taskList.sort((first,last)=> Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList))
    }
  }

  public deleteItemTaskList(event: number){
    this.taskList.splice(event,1)               // Exclui o olemento de posição event
  }

  public deleteAllTaskList(){
    const confirm = window.confirm("Você realmente deseja deletar tudo?")
    if(confirm){
      this.taskList = []
    }
  }

  public setEmmitItemTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public validationInput(event: string, index: number){
    event = event.trim()
    if(event.length == 0){
      const confirm = window.confirm("Task está vazia, deseja Deletar?")
      if(confirm){
        this.deleteItemTaskList(index)
      }
    }
  }

  

}
