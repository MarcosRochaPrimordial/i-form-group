import { Component, OnInit } from '@angular/core';
import { User } from './models/User';
import { TypedFormControl, TypedFormGroup } from './TypedReactiveForms/models/typed-form';
import { TypedFormBuilder } from './TypedReactiveForms/services/typed-form-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userForm: TypedFormGroup<User>;

  constructor(
    private fb: TypedFormBuilder,
  ) { }

  ngOnInit() {
    this.userForm = this.fb.typedGroup<User>({
      name: [''],
      age: [''],
    });

    this.userForm.controls.name.setValue('abc');

    console.log(this.userForm.controls.name);
  }
}
