import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX 5090',
  price: 2500,
  inStorage: 6,
}

@Component({
  templateUrl: './basic-page.component.html',
  styles: [
  ]
})
export class BasicPageComponent implements OnInit {

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

  ngOnInit(): void {
    this.myForm.reset( rtx5090 )
  }

  isValidField( field: string ):boolean | null {
    return this.myForm.controls[field].errors
     && this.myForm.controls[field].touched
  }

  getFieldError( field: string ): string | null {
    if ( !this.myForm.controls[field] ) return null;

    const errors = this.myForm.controls[field].errors || {};
    for (const error of Object.keys(errors)) {
      switch ( error ) {
        case 'required':
          return 'Este campo es requerido';
        case 'minlength':
          return `Minimo ${ errors['minlength'].requiredLength } caracters`;
      }
    }

    return null;
  }

  onSave(): void {
    if (this.myForm.invalid ) {
      /*
      * Normalmente en los formularios, nosotros en el html trabajamos las validaciones cuando fueron tocadas, entonces
      * para evitar que el usuaria haga un submit del formulario y se rechaze y no aparezaca nada, nosotros hacemos uso,
      * de 'markAllAsTouched' para que aparezcan nuestras validaciones.
      */

      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);

    this.myForm.reset({ price: 10 , inStorage: 0 });
  }

}
