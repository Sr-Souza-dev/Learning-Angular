import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() public contador:number = 0;            // Recebe um valor na passagem dos parametros

  constructor() { }

  ngOnInit(): void {
  }

}
