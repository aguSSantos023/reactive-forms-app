import { FormGroup, FormArray, ValidationErrors, AbstractControl } from '@angular/forms';


export class FormUtils {
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';

  static getTextError(errors: ValidationErrors): string | null{
    for( const key of Object.keys(errors) ){
      switch(key){
        case 'required':
          return 'Este campo es requerido'

        case 'minlength':
          return `Mínimo de ${ errors['minlength'].requiredLength } caracteres.`

        case 'min':
          return `Valor mínimo de ${ errors['min'].min }`

        case 'email':
          return 'El valor ingresado no es un correo electrónico valido.'

        case 'pattern':
          if (errors['pattern'].requiredPattern === FormUtils.emailPattern) {
            return 'El valor no es valido como correo electrónico'
          }else{
            return 'Error de patrón contra expresión regular'
          }


        default:
          return 'Error de validacion no controlado'
      }

    }

    return null
  }


  static isValidField( form: FormGroup, fieldName: string ): boolean | null {
    return (
      form.controls[fieldName].errors &&
      form.controls[fieldName].touched
    )
  }

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null{
    return (
      formArray.controls[index].errors &&
      formArray.controls[index].touched
    )
  }


  static getFieldError( form: FormGroup, fieldName: string ): string | null {

    if( ! form.controls[fieldName] ) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return this.getTextError(errors)

  }


  static getFieldErrorInArray( formArray: FormArray, index: number ): string | null {

    if( formArray.controls.length === 0 ) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextError(errors)

  }


  static isFieldOneEqualFieldTwo( field1: string, field2: string ){

    return (formGroup: AbstractControl) => {

      const field1Value = formGroup.get(field1)?.value;
      const field2Value = formGroup.get(field2)?.value;

      return field1Value === field2Value ? null : { passwordsNotEqual: true}
    }
  }
}



