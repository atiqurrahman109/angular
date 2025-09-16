import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StudentList } from './component/student-list/student-list';
import { Studentform } from './component/studentform/studentform';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolClassList } from './component/school-class-list/school-class-list';
import { SchoolClassForm } from './component/school-class-form/school-class-form';
import { SectionList } from './component/section-list/section-list';
import { SectionForm } from './component/section-form/section-form';

import { ExamComponent } from './component/exam-component/exam-component';
import { AttendanceComponent } from './component/attendance-component/attendance-component';
import { FeeComponent } from './component/fee-component/fee-component';
import { ResultComponent } from './component/result-component/result-component';
import { Timetable } from './component/timetable/timetable';
import { TeacherComponent } from './component/teacher-component/teacher-component';
import { TeacherAssignmentComponent } from './component/teacher-assignment-component/teacher-assignment-component';
import { TransportComponent } from './component/transport-component/transport-component';
import { TransportAssignmentComponent } from './component/transport-assignment/transport-assignment';


@NgModule({
  declarations: [
    App,
    StudentList,
    Studentform,
    SchoolClassList,
    SchoolClassForm,
    SectionList,
    SectionForm,
    ExamComponent,
    AttendanceComponent,
    FeeComponent,
    ResultComponent,
    Timetable,
    TeacherComponent,
    TeacherAssignmentComponent,
    TransportComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
