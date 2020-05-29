import { PatientService } from './../../../services/patient/patient.service';
import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-list-appointment',
  templateUrl: './list-appointment.component.html',
  styleUrls: ['./list-appointment.component.css']
})
export class ListAppointmentComponent implements OnInit {

  id: any;
  appointments = [];

  constructor(
    private patientService: PatientService,
  ) {
    this.id = localStorage.getItem('id');
  }

  ngOnInit() {
    this.listAppointment();
  }

  listAppointment() {
    this.patientService.listAppointment(this.id).subscribe(res => {
      if (res) {
        this.appointments = res['appointments'];
      }
      else {
        this.appointments = [];
      }
    }, err => {
      console.log(err);
    })
  }

  cancelAppointment(id) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to cancel this appointment?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {

          let obj = { '_id': id, 'status': "CANCEL" }
          this.patientService.cancelAppointment(obj).subscribe(res => {
            if (res) {
              swal("", "Appointment has been canceled!", "success");
              let index = this.appointments.findIndex(obj => obj._id == res['appointment']['_id']);
              if (index !== -1) {
                this.appointments[index] = res['appointment'];
              }
            }
          }, err => {
            if (err) {
              console.log(err);
            }
          })
        }
      });
  }



}


