import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: [
  ]
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ]

  });

  public person = {
    gender: 'F',
    wantNotification: false
}

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  onSubmit(): void {
    if ( this.myForm.invalid ) {
      this.myForm.markAllAsTouched()
      return;
    }

    /* esto es por si mi backend no acepta todas las propiedads, y solo se puedo mandar el genero y si quiere notificaciones,
    * por que aceptar las politicas es algo mas relacionado con el front, entonces aplico desestructuracion de objetos para
    * poder pasarle las propiedades que yo requiero
    */

    const { termsAndConditions, ...newPerson } = this.myForm.value
    this.person = newPerson;
    console.log( this.myForm.value );
    console.log( this.person );
  }

}
