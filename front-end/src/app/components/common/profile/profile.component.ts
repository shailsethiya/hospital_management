import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromRoot from './../../../index-reducer';
import * as  ListProfileActions from './actions/list-profile.actions';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit, OnDestroy {

  userDetails: any;

  obsListProfile: Observable<any>;
  subListProfile: Subscription;

  obsListProfileErr: Observable<any>;
  subListProfileErr: Subscription;

  constructor(
    private _store: Store<fromRoot.State>
  ) {

    this.obsListProfile = this._store.select(fromRoot.selectListProfileSuccess);
    this.obsListProfileErr = this._store.select(fromRoot.selectListProfileFailure);
  }

  ngOnInit() {

    let isOnInit = true;

    //let id = localStorage.getItem('_id');

    // this._store.dispatch(new ListProfileActions.ListProfile(id));

    this.subListProfile = this.obsListProfile.subscribe(res => {
      if (res && !isOnInit) {
        this.userDetails = res.user;
      }
    })

    this.subListProfileErr = this.obsListProfileErr.subscribe(err => {
      if (err && !isOnInit) {
        console.log(err)
      }
    })

    isOnInit = false;
  }

  ngOnDestroy() {
    if (this.subListProfile) this.subListProfile.unsubscribe();
    if (this.subListProfileErr) this.subListProfileErr.unsubscribe();
  }

}
