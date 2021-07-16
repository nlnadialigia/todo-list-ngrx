import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as fromAppActions from '../state/app.actions';
import { LoginService } from './../shared/services/login.service';

@Injectable()
export class AppEffects {
  doLogin$ = createEffect(() =>
    { return this.actions$.pipe(
      ofType(fromAppActions.doLogin),
      mergeMap(({ name, email }) =>
        this.loginService.login(name, email).pipe(
          map((user) => {
            this.router.navigate(['d']);
            return fromAppActions.doLoginSucess({ user });
          }),
          catchError(() => of(fromAppActions.doLoginFailure()))
        )
      )
    ) }
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
}
