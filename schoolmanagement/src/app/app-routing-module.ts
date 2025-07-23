import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddstudentComponent } from './component/addstudent.component/addstudent.component';
import { ViewallstudentComponent } from './component/viewallstudent.component/viewallstudent.component';
import { AddteacherComponent } from './component/addteacher.component/addteacher.component';
import { ViewallteacherComponent } from './component/viewallteacher.component/viewallteacher.component';
import { UpdatestudentComponent } from './component/updatestudent.component/updatestudent.component';
import { UpdateteacherComponent } from './component/updateteacher.component/updateteacher.component';
import { ViewallstudentdetailsComponent } from './component/viewallstudentdetails.component/viewallstudentdetails.component';
import { ViewallteacherdetailsComponent } from './component/viewallteacherdetails.component/viewallteacherdetails.component';

import { ApplyaddComponent } from './component/applyadd.component/applyadd.component';
import { ApplyeditComponent } from './component/applyedit.component/applyedit.component';
import { ApplylistComponent } from './component/applylist.component/applylist.component';
import { AttendencelistComponent } from './component/attendencelist.component/attendencelist.component';
import { AttendenceComponent } from './component/attendence.component/attendence.component';
import { AttendenceeditComponent } from './component/attendenceedit.component/attendenceedit.component';
import { ExamaddComponent } from './component/examadd.component/examadd.component';
import { ExameditComponent } from './component/examedit.component/examedit.component';
import { ExamlistComponent } from './component/examlist.component/examlist.component';
import { NoticeaddComponent } from './component/noticeadd.component/noticeadd.component';
import { NoticeeditComponent } from './component/noticeedit.component/noticeedit.component';
import { NoticelistComponent } from './component/noticelist.component/noticelist.component';
import { StudentfeeaddComponent } from './component/studentfeeadd.component/studentfeeadd.component';
import { StudentfeeeditComponent } from './component/studentfeeedit.component/studentfeeedit.component';
import { StudentfeelistComponent } from './component/studentfeelist.component/studentfeelist.component';
import { ClassComponent } from './component/class.component/class.component';
import { Login } from './Auth/login/login';
import { Registration } from './Auth/registration/registration';
import { UserProfile } from './Auth/user-profile/user-profile';
import { PaymentComponent } from './component/payment.component/payment.component';
import { ViewComponent } from './component/view.component/view.component';

const routes: Routes = [
  { path: 'viewteacher', component: ViewallteacherComponent },
  { path: 'updatestudent/:id', component: UpdatestudentComponent },
  { path: 'viewstudentdetials/:id', component: ViewallstudentdetailsComponent },
  { path: 'viewteacherdetails/:id',component:ViewallteacherdetailsComponent},
  { path: 'addteacher', component: AddteacherComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'viewstudent', component: ViewallstudentComponent },
  { path: '', component: AddstudentComponent },
  { path: 'updateteacher/:id', component: UpdateteacherComponent },

  { path: 'addapply', component: ApplyaddComponent },
  { path: 'listapply', component: ApplylistComponent },
  { path: 'editapply/:id', component: ApplyeditComponent },
  { path: 'listattendence', component: AttendencelistComponent },
  { path: 'addattendence/:class', component: AttendenceComponent },
  { path: 'editattendence/:id', component: AttendenceeditComponent },
  { path: 'examadd', component: ExamaddComponent },
  { path: 'examedit/:id', component: ExameditComponent },
  { path: 'examlist', component: ExamlistComponent },
  { path: 'noticeadd', component: NoticeaddComponent },
  { path: 'noticeedit/:id', component: NoticeeditComponent },
  { path: 'noticelist', component: NoticelistComponent },
  { path: 'studentfeeadd', component: StudentfeeaddComponent },
  { path: 'studentfeeedit/:id', component: StudentfeeeditComponent },
  { path: 'studentfeelist', component: StudentfeelistComponent },
  { path: 'class', component: ClassComponent },
  {path: 'addPayment' , component: PaymentComponent},
  {path: 'viewPayment' , component: ViewComponent},



  {path: 'login', component: Login},
  {path: 'reg', component: Registration},
  {path: 'user', component: UserProfile}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
