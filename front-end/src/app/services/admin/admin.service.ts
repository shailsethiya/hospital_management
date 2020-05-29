import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private getDcotorUrl = 'admin/getDoctor';
  private getPatientUrl = 'admin/getPatient';
  private deleteUserUrl = "admin/deleteUser/";
  private verifyUserUrl = "admin/verifiedUser";

  constructor(
    private http: HttpClient,
  ) { }

  getDoctors() {
    return this.http.get(environment.backendUrl + this.getDcotorUrl);
  }

  getPatient() {
    return this.http.get(environment.backendUrl + this.getPatientUrl);
  }

  deleteDoctor(id) {
    return this.http.delete(environment.backendUrl + this.deleteUserUrl + id);
  }

  deletePatient(id) {
    return this.http.delete(environment.backendUrl + this.deleteUserUrl + id);
  }

  verifyUser(obj) {
    return this.http.put(environment.backendUrl + this.verifyUserUrl, obj)
  }

}
