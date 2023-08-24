import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from "@angular/forms";

@Directive({
  selector: '[appLicenseValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: LicenseValidatorDirective, multi: true}]
})
export class LicenseValidatorDirective {

  preVal;

  validate(control: AbstractControl): { [key: string]: any } | null {
    let LICENSE_REGEX1 = /^[B][0-9]{7}$/; // Regular Expression 1

    if (control.value != undefined) {
      if (control.value.length == 0 || LICENSE_REGEX1.test(control.value)) {
        return null;
      }

      if (this.preVal != control.value) {
        this.preVal = control.value.toUpperCase();
        control.setValue(control.value.toUpperCase());
      }
    } else {
      return null;
    }

    return {'licenseInvalid': true};
  }

  constructor() { }

}
