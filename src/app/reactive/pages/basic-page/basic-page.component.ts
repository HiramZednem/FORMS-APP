import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {
  // public myForm: FormGroup = new FormGroup({
  //   //Al inicio se pone el valor por defecto., el segundo es una unica validacion, o un arreglo de validaciones
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], [])
  // })

  //Esta es otra matera de hacerlo
  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.minLength(3) ] ],
    price: [0, [ Validators.required, Validators.min(0) ] ],
    inStorage: [0, [ Validators.required, Validators.min(0) ] ],
  })

  constructor( private fb: FormBuilder) { }

  onSave(): void {
    if (this.myForm.invalid ) return;
    console.log(this.myForm.value);
  }

}
