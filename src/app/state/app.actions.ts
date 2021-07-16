import { createAction, props } from '@ngrx/store';
import { User } from './../shared/models/user.model';

export const doLogin = createAction(
  '[Login] Do Login',
  props<{ name: string; email: string }>()
);

export const doLoginSucess = createAction(
  '[API] Do Login Sucess',
  props<{ user: User }>()
);

export const doLoginFailure = createAction('[API] Do Login Failure');
