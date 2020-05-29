import { DoctorService } from './../../../services/doctor/doctor.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-visited-patient',
  templateUrl: './visited-patient.component.html',
  styleUrls: ['./visited-patient.component.css']
})
export class VisitedPatientComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;

  visitedPatients = [];

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute
  ) {
    this.routeSub = this.route.params.subscribe(params => {
      this.listVisitedPatient(params['id'])
    });

  }

  ngOnInit() {
  }

  listVisitedPatient(id) {
    this.doctorService.listVisitedPatient(id).subscribe(res => {
      if (res) {
        this.visitedPatients = res['appointments']
      }
      else {
        this.visitedPatients = [];
      }
    }, err => {
      if (err) {
        console.log(err);
      }
    })
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

}
