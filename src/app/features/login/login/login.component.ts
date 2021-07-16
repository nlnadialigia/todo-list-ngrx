import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAppActions from '../../../state/app.actions';
import { AppState } from './../../../state/app.reducer';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('')
  });
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  login() {
    this.store.dispatch(fromAppActions.doLogin(this.form.value));
  }
}
