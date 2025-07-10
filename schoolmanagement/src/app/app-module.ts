import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AttendenceComponent } from './component/attendence.component/attendence.component';
import { ExamComponent } from './component/exam.component/exam.component';
import { FeeComponent } from './component/fee.component/fee.component';
import { ResultComponent } from './component/result.component/result.component';
import { AddstudentComponent } from './component/addstudent.component/addstudent.component';
import { UpdatestudentComponent } from './component/updatestudent.component/updatestudent.component';
import { ViewallstudentComponent } from './component/viewallstudent.component/viewallstudent.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddteacherComponent } from './component/addteacher.component/addteacher.component';
import { UpdateteacherComponent } from './component/updateteacher.component/updateteacher.component';
import { ViewallteacherComponent } from './component/viewallteacher.component/viewallteacher.component';

@NgModule({
  declarations: [
    App,
 
    AttendenceComponent,
    ExamComponent,
    FeeComponent,
    ResultComponent,
    AddstudentComponent,
    UpdatestudentComponent,
    ViewallstudentComponent,
  
    AddteacherComponent,
    UpdateteacherComponent,
    ViewallteacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
