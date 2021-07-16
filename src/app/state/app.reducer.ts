import { Action, createReducer, on } from '@ngrx/store';
import * as fromAppActions from '../state/app.actions';
import { User } from './../shared/models/user.model';

export interface AppState {
  user?: User;
}

export const initialState: AppState = {
  user: undefined
};

const appStateReducer = createReducer(
  initialState,
  on(fromAppActions.doLoginSucess, (state, { user }) => ({
    ...state,
    user
  }))
);

export function reducer(state: AppState | undefined, action: Action): AppState {
  return appStateReducer(state, action);
}
