import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private getAppointmentUrl = 'doctor/getAppointment/';
  private updateStatusUrl = 'doctor/updateStatus';
  private listVisitedPatientUrl = 'doctor/visitedPatient/'


  constructor(
    private http: HttpClient,
  ) { }

  getAppointment(id) {
    return this.http.get(environment.backendUrl + this.getAppointmentUrl + id);
  }

  updateStatus(obj) {
    return this.http.put(environment.backendUrl + this.updateStatusUrl, obj);
  }

  listVisitedPatient(id) {
    return this.http.get(environment.backendUrl + this.listVisitedPatientUrl + id);
  }

}
