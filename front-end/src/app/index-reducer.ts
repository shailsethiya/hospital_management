import { createSelector, createFeatureSelector, ActionReducerMap, } from '@ngrx/store';

import * as fromListProfile from './components/common/profile/reducer/list-profile.reducer';


export interface State {
    listProfile: fromListProfile.State;
}

export const reducers = {
    listProfile: fromListProfile.reducer,
}

export function selectListProfileSuccess(state: State) {
    return state.listProfile.result;
}

export function selectListProfileFailure(state: State) {
    return state.listProfile.err;
}