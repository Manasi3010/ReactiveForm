import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static checkforwhitespace(control: AbstractControl): ValidationErrors | null {
    if (control.value && control.value.length) {
      let isOnlyWhitespace = (control.value || '').trim().length === 0;
      let isValid = !isOnlyWhitespace;
      return isValid ? null : { onlywhitespace: true };
    }
    return null;
  }
  static emailsLenghtAndFormat(
    control: AbstractControl
  ): ValidationErrors | null {
    const email = control.value;
    const responseKo = { invalid: true };
    const responseOk: { [x: string]: any } = null;
    const responseKoMaxLength = { maxlength: true };

    if (!email) {
      return responseOk;
    }

    if (email.length > 100) {
      return responseKoMaxLength;
    }

    const EMAIL_REGEXP =
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email !== '' && (email.length <= 5 || !EMAIL_REGEXP.test(email))) {
      return responseKo;
    }

    return responseOk;
  }
}
