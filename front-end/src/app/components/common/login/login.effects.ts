import { LoginService } from './../../../services/common/login.service';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { tap, map, exhaustMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';

import * as ListProfileActions from '../profile/actions/list-profile.actions';


@Injectable()
export class LoginEffects {

    constructor(
        private actions$: Actions,
        private loginService: LoginService
    ) { }

    // @Effect()
    // listProfile$ = this.actions$.pipe(ofType<ListProfileActions.ListProfile>(ListProfileActions.LISTPROFILE),
    //     map((action: ListProfileActions.ListProfile) => action),

    //     exhaustMap(() =>
    //         this.loginService.getProfilesList()
    //             .pipe(
    //                 map(result => new ListProfileActions.ListProfileSuccess(result)),
    //                 catchError(error => of(new ListProfileActions.ListProfileFailure(error)))
    //             )
    //     )
    // );
}