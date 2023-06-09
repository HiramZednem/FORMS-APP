import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  myForm:FormGroup = this.fb.group({
    name: ['', [ Validators.required ]],
    email: ['', [ Validators.required ]],
    username: ['', [ Validators.required ]],
    password: ['', [ Validators.required, Validators.minLength(6) ]],
    password2: ['', [ Validators.required ]],
  })


  constructor( private fb: FormBuilder) { }

  isValidField( field: string ) {
    //TODO: obtener validacion desde un servicia
  }

  onSubmit(){
    this.myForm.markAllAsTouched();
  }




}
