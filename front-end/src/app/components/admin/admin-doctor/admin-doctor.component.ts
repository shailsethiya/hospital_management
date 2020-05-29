import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../../services//admin/admin.service';
import swal from 'sweetalert';

@Component({
  selector: 'app-admin-doctor',
  templateUrl: './admin-doctor.component.html',
  styleUrls: ['./admin-doctor.component.css']
})
export class AdminDoctorComponent implements OnInit {

  doctors = [];

  constructor(
    private adminService: AdminService,
  ) { }

  ngOnInit() {
    this.getDoctors();
  }

  getDoctors() {
    this.adminService.getDoctors().subscribe(res => {
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

  deleteDoctor(id) {
    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to delete this doctor?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
          this.adminService.deleteDoctor(id).subscribe(res => {
            if (res) {
              swal("", "Doctor has been deleted!", "success");
              let index = this.doctors.findIndex(obj => obj['_id'] == res['user']['_id']);
              if (index !== -1) {
                this.doctors.splice(index, 1);
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


  verifyDoctor(id) {

    swal({
      title: "Are you sure?",
      text: "Are you sure that you want to update status as verified?",
      icon: "warning",
      dangerMode: true,
    })
      .then(willDelete => {
        if (willDelete) {
          let obj = { _id: id, isVerified: 'Y' };
          this.adminService.verifyUser(obj).subscribe(res => {
            if (res) {
              swal("", "Doctor Verified successfully", "success");
              let index = this.doctors.findIndex(obj => obj['_id'] == res['user']['_id']);

              if (index !== -1) {
                this.doctors[index] = res['user'];
              }
            }
          }, err => {
            console.log(err);
          })
        }
      });
  }
}
