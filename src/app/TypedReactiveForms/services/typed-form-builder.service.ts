import { Injectable } from '@angular/core';
import { AbstractControl, AbstractControlOptions, AsyncValidatorFn, FormArray, FormBuilder, ValidatorFn } from '@angular/forms';
import { TypedFormArray, TypedFormGroup } from '../models/typed-form';

@Injectable({
  providedIn: 'root'
})
export class TypedFormBuilder extends FormBuilder {
  typedGroup<T extends { [key: string]: any }>(controlsConfig: T, options?: AbstractControlOptions | null): TypedFormGroup<T> {
    return this.group(controlsConfig, options) as TypedFormGroup<T>;
  }

  override array<T extends AbstractControl>(controlsConfig: T[], validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormArray {
    return new TypedFormArray(controlsConfig, validatorOrOpts, asyncValidator);
  }
}
