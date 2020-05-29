import { PatientService } from './../../../services/patient/patient.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Component, OnInit, Input, OnDestroy, Output } from '@angular/core';
import swal from 'sweetalert';
import * as fromRoot from './../../../index-reducer';
import * as ListProfileActions from './../../common/profile/actions/list-profile.actions';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit, OnDestroy {

  @Input() doctorDetails;
  @Output() onAppointmentBook: EventEmitter<any> = new EventEmitter<any>();

  appointmentDate: Date;
  userDetails: any;

  obsListProfile: Observable<any>;
  subListProfile: Subscription;

  obsListProfileErr: Observable<any>;
  subListProfileErr: Subscription;


  info: any;

  constructor(
    private _store: Store<fromRoot.State>,
    private patientService: PatientService
  ) {
    this.obsListProfile = this._store.select(fromRoot.selectListProfileSuccess);
    this.obsListProfileErr = this._store.select(fromRoot.selectListProfileFailure);


    let id = localStorage.getItem('id');
    this._store.dispatch(new ListProfileActions.ListProfile(id));

  }
  ngOnInit() {

    let isOnInit = true;

    this.subListProfile = this.obsListProfile.subscribe(res => {
      if (res && !isOnInit) {
        this.userDetails = res.user;
      }
    })

    this.subListProfileErr = this.obsListProfileErr.subscribe(err => {
      if (err && !isOnInit) {
        console.log(err)
      }
    })

    isOnInit = false;
  }


  saveAppointment() {
    if (this.doctorDetails && this.appointmentDate) {
      let obj = {
        'doctorId': this.doctorDetails['_id'],
        'date': new Date(this.appointmentDate),
        'status': 'ACTIVE',
        'user': this.userDetails
      }

      console.log(obj);

      this.patientService.bookAppintment(obj).subscribe(res => {
        if (res) {
          this.onAppointmentBook.emit();
          swal("", "Appointment book successfully", "success");
        }
      }, err => {
        console.log(err);
      })
    }
    else {
      swal("", "Please select appointment date", "warning");
    }
  }



  ngOnDestroy() {
    if (this.subListProfile) this.subListProfile.unsubscribe();
    if (this.subListProfileErr) this.subListProfileErr.unsubscribe();
  }

}
