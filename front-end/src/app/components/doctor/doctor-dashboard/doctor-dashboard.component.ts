import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DoctorService } from './../../../services/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import * as fromRoot from './../../../index-reducer';
import * as ListProfileActions from './../../common/profile/actions/list-profile.actions';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {

  id: any;
  appointments = [];

  constructor(
    public doctorService: DoctorService,
    private _store: Store<fromRoot.State>,
    private router: Router,
  ) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.getAppointment()
  }

  getAppointment() {
    this.doctorService.getAppointment(this.id).subscribe(res => {
      if (res) {
        this.appointments = res['appointments'];
      }
    }, err => {
      if (err) {
        console.log(err);
      }
    })
  }

  updateStatus(id, status) {
    let obj = { '_id': id, 'status': status }
    this.doctorService.updateStatus(obj).subscribe(res => {
      if (res) {
        let index = this.appointments.findIndex(obj => obj['_id'] == res['appointment']['_id'])

        if (index !== -1) {
          this.appointments[index] = res['appointment']
        }
      }
    }, err => {
      console.log(err);
    })
  }

  viewProfile(id) {
    this._store.dispatch(new ListProfileActions.ListProfile(id));
  }

  sendDoctorId() {
    this.router.navigate(['visited-patient', this.id])
  }

}
