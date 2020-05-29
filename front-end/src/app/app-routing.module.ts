import { ListAppointmentComponent } from './components/patient/list-appointment/list-appointment.component';
import { AdminPatientComponent } from './components/admin/admin-patient/admin-patient.component';
import { AdminDoctorComponent } from './components/admin/admin-doctor/admin-doctor.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { RegisterComponent } from './components/common/register/register.component';
import { PatientDashboardComponent } from './components/Patient/patient-dashboard/patient-dashboard.component';
import { DoctorDashboardComponent } from './components/Doctor/doctor-dashboard/doctor-dashboard.component';
import { RoleGuardService } from './AuthGuard/role-guard.service';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/common/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitedPatientComponent } from './components/doctor/visited-patient/visited-patient.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {
    path: 'admin-doctor',
    component: AdminDoctorComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {
    path: 'admin-patient',
    component: AdminPatientComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'ADMIN'
    }
  },
  {
    path: 'doctor-dashboard',
    component: DoctorDashboardComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'DOCTOR'
    }
  },
  {
    path: 'visited-patient/:id',
    component: VisitedPatientComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'DOCTOR'
    }
  },
  {
    path: 'patient-dashboard',
    component: PatientDashboardComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'PATIENT'
    }
  },
  {
    path: 'list-appointment',
    component: ListAppointmentComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'PATIENT'
    }
  }
  // {
  //   path: 'profile',
  //   component: ProfileComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
