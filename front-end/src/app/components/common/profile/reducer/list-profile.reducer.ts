import { ActionReducer, Action } from '@ngrx/store';
import * as ListProfileActions from '../actions/list-profile.actions';


export interface State {
    result: any,
    err: any
}

const initialState: State = {
    result: {},
    err: {}
};

export function reducer(state = initialState, action: ListProfileActions.All): State {
    switch (action.type) {
        case ListProfileActions.LISTPROFILE_SUCCESS: {
            return {
                ...state,
                result: action.profile
            }
        }

        case ListProfileActions.LISTPROFILE_FAILURE: {
            return {
                ...state,
                err: action.err
            }
        }

        default: {
            return state;
        }

    }

}

