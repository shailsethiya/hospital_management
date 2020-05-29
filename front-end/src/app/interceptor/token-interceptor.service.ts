import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  token: any;

  constructor() {
    this.token = localStorage.getItem('token');
  }

  intercept(req, next) {
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.token}`
      }
    })
    return next.handle(tokenizedReq);
  }

}
