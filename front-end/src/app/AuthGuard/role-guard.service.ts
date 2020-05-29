import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

import decode from 'jwt-decode';


@Injectable()
export class RoleGuardService implements CanActivate {

  // token: any;

  constructor(public router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const token = localStorage.getItem('token');

    if (token) {
      const expectedRole = route.data.expectedRole;
      const tokenPayload = decode(token);
      if (tokenPayload.role !== expectedRole) {
        this.router.navigate(['/login']);
      }

      return true;
    }
    else {
      this.router.navigate(['/login']);
    }

  }
}
