import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registrationUrl = "register";

  constructor(
    private http: HttpClient,
  ) { }

  register(data) {
    return this.http.post(environment.backendUrl + this.registrationUrl, data);
  }

}
