import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from './../../../index-reducer';
import * as ListProfileActions from './../../../components/common/profile/actions/list-profile.actions';

@Component({
  selector: 'application-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  role: any;
  id: any;

  constructor(
    private _store: Store<fromRoot.State>,
    private router: Router

  ) {
    this.role = localStorage.getItem('role');
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {

  }

  viewProfile() {
    this._store.dispatch(new ListProfileActions.ListProfile(this.id));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
