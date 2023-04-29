import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent {
  // public myForm: FormGroup = new FormGroup({
  //   //Al inicio se pone el valor por defecto.
  //   name: new FormControl('', [], []),
  //   price: new FormControl(0, [], []),
  //   inStorage: new FormControl(0, [], [])
  // })

  //Esta es otra matera de hacerlo
  public myForm: FormGroup = this.fb.group({
    name: [''],
    price: [0],
    inStorage: [0],
  })

  constructor( private fb: FormBuilder) { }

  onSave(): void {
    console.log(this.myForm.value);
  }

}
