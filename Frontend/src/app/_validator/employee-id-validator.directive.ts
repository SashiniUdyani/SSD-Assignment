import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[appEmployeeIdValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: EmployeeIdValidatorDirective, multi: true}]
})
export class EmployeeIdValidatorDirective {

  validate(control: AbstractControl): { [key: string]: any } | null {
    let TEXT_REGEX = /^[0-9]{5}$/; // Regular Expression 1
    if (control.value != undefined) {
      if (control.value.length == 0 || TEXT_REGEX.test(control.value)) {
        return null;
      }
    } else {
      return null;
    }

    return {'employeeIdInvalid': true};
  }

  constructor() {
  }

}
