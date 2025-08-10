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
import { Attendence } from './Component/add-attendence/attendence';
import { ViewAttendence } from './Component/view-attendence/view-attendence';


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
    Attendence,
    ViewAttendence,
 
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
