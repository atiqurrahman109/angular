import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { AttendenceComponent } from './component/attendence.component/attendence.component';

import { AddstudentComponent } from './component/addstudent.component/addstudent.component';
import { UpdatestudentComponent } from './component/updatestudent.component/updatestudent.component';
import { ViewallstudentComponent } from './component/viewallstudent.component/viewallstudent.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddteacherComponent } from './component/addteacher.component/addteacher.component';
import { UpdateteacherComponent } from './component/updateteacher.component/updateteacher.component';
import { ViewallteacherComponent } from './component/viewallteacher.component/viewallteacher.component';
import { ViewallstudentdetailsComponent } from './component/viewallstudentdetails.component/viewallstudentdetails.component';
import { ViewallteacherdetailsComponent } from './component/viewallteacherdetails.component/viewallteacherdetails.component';
import { ApplyaddComponent } from './component/applyadd.component/applyadd.component';
import { ApplyeditComponent } from './component/applyedit.component/applyedit.component';
import { ApplylistComponent } from './component/applylist.component/applylist.component';
import { AttendenceeditComponent } from './component/attendenceedit.component/attendenceedit.component';
import { AttendencelistComponent } from './component/attendencelist.component/attendencelist.component';
import { ExamaddComponent } from './component/examadd.component/examadd.component';
import { ExameditComponent } from './component/examedit.component/examedit.component';
import { ExamlistComponent } from './component/examlist.component/examlist.component';
import { NoticeaddComponent } from './component/noticeadd.component/noticeadd.component';
import { NoticeeditComponent } from './component/noticeedit.component/noticeedit.component';
import { NoticelistComponent } from './component/noticelist.component/noticelist.component';
import { StudentfeeaddComponent } from './component/studentfeeadd.component/studentfeeadd.component';
import { StudentfeeeditComponent } from './component/studentfeeedit.component/studentfeeedit.component';
import { StudentfeelistComponent } from './component/studentfeelist.component/studentfeelist.component';
import { SubjectnameComponent } from './component/subjectname.component/subjectname.component';
import { PaymentComponent } from './component/payment.component/payment.component';
import { ClassComponent } from './component/class.component/class.component';
import { Login } from './Auth/login/login';
import { Logout } from './Auth/logout/logout';
import { Registration } from './Auth/registration/registration';
import { UserProfile } from './Auth/user-profile/user-profile';

@NgModule({
  declarations: [
    App,
 AttendenceComponent,
  
    AddstudentComponent,
    UpdatestudentComponent,
    ViewallstudentComponent,
     AddteacherComponent,
    UpdateteacherComponent,
    ViewallteacherComponent,
    ViewallstudentdetailsComponent,
    ViewallteacherdetailsComponent,
    ApplyaddComponent,
    ApplyeditComponent,
    ApplylistComponent,
    AttendenceeditComponent,
    AttendencelistComponent,
    ExamaddComponent,
    ExameditComponent,
    ExamlistComponent,
    NoticeaddComponent,
    NoticeeditComponent,
    NoticelistComponent,
    StudentfeeaddComponent,
    StudentfeeeditComponent,
    StudentfeelistComponent,
    SubjectnameComponent,
    PaymentComponent,
    ClassComponent,
    Login,
    Logout,
    Registration,
    UserProfile,

    
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
