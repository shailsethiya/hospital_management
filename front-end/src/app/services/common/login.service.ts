import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = "login";

  constructor(
    private http: HttpClient,
  ) { }

  login(data) {
    return this.http.post(environment.backendUrl + this.loginUrl, data);
  }

  

}
