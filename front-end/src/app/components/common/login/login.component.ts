import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { LoginService } from './../../../services/common/login.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as fromRoot from './../../../index-reducer';
import { Store } from '@ngrx/store';
import * as ListProfileActions from '../profile/actions/list-profile.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginDetails: any;

  loginForm: FormGroup;




  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private _store: Store<fromRoot.State>
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit() {
  }


  login() {

    if (this.loginForm.valid) {
      let obj = this.loginForm.value;
      this.loginService.login(obj).subscribe(result => {
        if (result) {
          //  this._store.dispatch(new ListProfileActions.ListProfile());
          localStorage.setItem('token', result['token']);

          this.loginDetails = result['user'];
          localStorage.setItem('id', this.loginDetails['_id']);
          localStorage.setItem('role', this.loginDetails['role']);


          if (result['user']['role'] == 'ADMIN')
            this.router.navigate(['/admin-dashboard']);
          else if (result['user']['role'] == 'DOCTOR')
            this.router.navigate(['/doctor-dashboard']);
          else if (result['user']['role'] == 'PATIENT')
            this.router.navigate(['/patient-dashboard']);
        }
      }, error => {
        alert(error.error);
      }
      )
    }
    else {
      <any>Object.values(this.loginForm.controls).forEach(controls =>
        controls.markAllAsTouched()
      )
    }

  }


  ngOnDestroy() {
  }

}
