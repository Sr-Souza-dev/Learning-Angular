import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reative-form',
  templateUrl: './reative-form.component.html',
  styleUrls: ['./reative-form.component.scss']
})
export class ReativeFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  public cadastroForm:FormGroup = this.fb.group({
    firstName: ["", Validators.required],
    lastName: ["", [Validators.required, Validators.minLength(3), Validators.email]],
  })

  public submitForm(){
    document.write("Formulário Reativo Enviado")
  }

  ngOnInit(): void {
  }

}
