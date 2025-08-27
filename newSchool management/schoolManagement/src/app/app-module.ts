import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AddStudentComponent } from './Component/add-student-component/add-student-component';
import { ViewStudentComponent } from './Component/view-student-component/view-student-component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AddTeacherComponent } from './Component/add-teacher-component/add-teacher-component';
import { ViewTeacherComponent } from './Component/view-teacher-component/view-teacher-component';
import { Navbar } from './layout/navbar/navbar';
import { Sidebar } from './layout/sidebar/sidebar';
import { Footer } from './layout/footer/footer';
import { Dashboard } from './layout/dashboard/dashboard';
import { Login } from './Component/auth/login/login';
import { Registration } from './Component/auth/registration/registration';

import { ViewClassScheduleComponent } from './Component/view-class-schedule-component/view-class-schedule-component';

import { AttendanceComponent } from './Component/attendence/attendence';
import { AddFeeComponent } from './Component/add-fee-component/add-fee-component';
import { RoutineComponent } from './Component/routine-component/routine-component';
import { MarksAddComponent } from './Component/add-marks-component/add-marks-component';
import { AddExamComponent } from './Component/add-exam-component/add-exam-component';
import { ViewExamComponent } from './Component/view-exam-component/view-exam-component';




@NgModule({
  declarations: [
    App,
    AddStudentComponent,
    ViewStudentComponent,
    AddTeacherComponent,
    ViewTeacherComponent,
    Navbar,
    Sidebar,
    Footer,
    Dashboard,
    Login,
    Registration,
    ViewClassScheduleComponent,

    AttendanceComponent,
    AddFeeComponent,
    RoutineComponent,
    MarksAddComponent,
    AddExamComponent,
    ViewExamComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
