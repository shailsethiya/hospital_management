import { Action } from '@ngrx/store';
// import { type } from 'os';

export const LISTPROFILE = 'LIST PROFILE';
export const LISTPROFILE_SUCCESS = 'LIST PROFILE SUCCESS';
export const LISTPROFILE_FAILURE = 'LIST PROFILE FAILURE';

export class ListProfile {
    readonly type = LISTPROFILE;
    constructor(public id: any) {

    }
}

export class ListProfileSuccess {
    readonly type = LISTPROFILE_SUCCESS;
    constructor(public profile: any) {

    }
}


export class ListProfileFailure {
    readonly type = LISTPROFILE_FAILURE;
    constructor(public err: any) {

    }
}

export type All = ListProfile | ListProfileSuccess | ListProfileFailure