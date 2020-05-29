import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private listDoctorsUrl = 'patient/getDoctors';
  private listAppointmentUrl = 'patient/getAppintment/';
  private cancelAppointmentUrl = 'patient/cancelAppintment';
  private bookAppintmentUrl = 'patient/bookAppintment'

  constructor(
    private http: HttpClient,
  ) { }

  listDoctors() {
    return this.http.get(environment.backendUrl + this.listDoctorsUrl)
  }

  listAppointment(id) {
    return this.http.get(environment.backendUrl + this.listAppointmentUrl + id)
  }

  cancelAppointment(body) {
    return this.http.put(environment.backendUrl + this.cancelAppointmentUrl, body);
  }

  bookAppintment(body) {
    return this.http.post(environment.backendUrl + this.bookAppintmentUrl, body)
  }
}
