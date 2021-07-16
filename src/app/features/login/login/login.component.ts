import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAppActions from '../../../state/app.actions';
import { AppState } from './../../../state/app.reducer';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private store: Store<AppState>) {}

  login() {
    this.store.dispatch(fromAppActions.doLogin(this.form.value));
  }
}
