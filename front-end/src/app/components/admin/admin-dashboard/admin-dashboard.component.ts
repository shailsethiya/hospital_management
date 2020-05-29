import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000)
      ])
    ]),

    trigger('fade', [
      transition('* => void', [
        animate(2000, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
