import { reducers } from './index-reducer';
import { RouterModule, Routes } from '@angular/router';
import { LoginEffects } from './components/common/login/login.effects';
import { RoleGuardService } from './AuthGuard/role-guard.service';
import { LoginService } from './services/common/login.service';
import { LoginComponent } from './components/common/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import { DoctorDashboardComponent } from './components/Doctor/doctor-dashboard/doctor-dashboard.component';
import { PatientDashboardComponent } from './components/Patient/patient-dashboard/patient-dashboard.component';
import { RegisterComponent } from './components/common/register/register.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ProfileComponent } from './components/common/profile/profile.component';
import { ProfileEffects } from './components/common/profile/profile.effects';
import { AdminPatientComponent } from './components/admin/admin-patient/admin-patient.component';
import { AdminDoctorComponent } from './components/admin/admin-doctor/admin-doctor.component';
import { AdminHeaderComponent } from './components/admin/admin-header/admin-header.component';
import { HeaderComponent } from './components/common/header/header.component';
import { VisitedPatientComponent } from './components/doctor/visited-patient/visited-patient.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ListAppointmentComponent } from './components/patient/list-appointment/list-appointment.component';
import { BookAppointmentComponent } from './components/patient/book-appointment/book-appointment.component';

import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { AdminService } from './services/admin/admin.service';
import { ProfileService } from './services/common/profile.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminDashboardComponent,
    DoctorDashboardComponent,
    PatientDashboardComponent,
    RegisterComponent,
    ProfileComponent,
    AdminPatientComponent,
    AdminDoctorComponent,
    AdminHeaderComponent,
    HeaderComponent,
    VisitedPatientComponent,
    FooterComponent,
    ListAppointmentComponent,
    BookAppointmentComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([ProfileEffects, LoginEffects]),

  ],
  providers: [
    LoginService, RoleGuardService, ProfileService, AdminService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
