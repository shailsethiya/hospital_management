import { Store } from '@ngrx/store';
import { PatientService } from './../../../services/patient/patient.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as ListProfileActions from './../../common/profile/actions/list-profile.actions';
import * as fromRoot from './../../../index-reducer';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-patient-dashboard',
  templateUrl: './patient-dashboard.component.html',
  styleUrls: ['./patient-dashboard.component.css']
})
export class PatientDashboardComponent implements OnInit {

  //@ViewChild('closeAppointmentModalBtn') closeAppointmentModalBtn: ElementRef;

  doctors = [];

  doctorDetails: any;

  constructor(
    private patientService: PatientService,
    private _store: Store<fromRoot.State>,
  ) { }

  ngOnInit() {
    this.listDoctor()
  }

  listDoctor() {
    this.patientService.listDoctors().subscribe(res => {
      if (res) {
        this.doctors = res['doctors'];
      }
      else {
        this.doctors = [];
      }
    }, err => {
      if (err) {
        console.log(err);
      }
    })
  }


  viewProfile(id) {
    this._store.dispatch(new ListProfileActions.ListProfile(id));
  }

  getDoctorDetails(doctor) {
    this.doctorDetails = doctor;
  }

  closeAppointmentModal() {
    // alert('testing');
    //this.closeAppointmentModalBtn.nativeElement().click();
  }


}
