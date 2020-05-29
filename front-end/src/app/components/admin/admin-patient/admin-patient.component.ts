import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services//admin/admin.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent implements OnInit {

  patients: [];

  constructor(
    private adminService: AdminService,
  ) { }

  ngOnInit() {
    this.getPatient();
  }

  getPatient() {
    this.adminService.getPatient().subscribe(res => {
      if (res) {
        this.patients = res['patients'];
      }
      else {
        this.patients = [];
      }
    }, err => {
      if (err) {
        console.log(err);
      }
    })
  }

  deletePatient(id) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this patient?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
          this.adminService.deletePatient(id).subscribe(res => {
            if (res) {
              swal("", "Patient has been deleted!", "success");
              let index = this.patients.findIndex(obj => obj['_id'] == res['user']['_id']);
              if (index !== -1) {
                this.patients.splice(index, 1);
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
