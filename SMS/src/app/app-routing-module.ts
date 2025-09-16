import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentList } from './component/student-list/student-list';
import { Studentform } from './component/studentform/studentform';
import { SchoolClassList } from './component/school-class-list/school-class-list';
import { ExamComponent } from './component/exam-component/exam-component';
import { AttendanceComponent } from './component/attendance-component/attendance-component';
import { FeeComponent } from './component/fee-component/fee-component';
import { ResultComponent } from './component/result-component/result-component';

const routes: Routes = [
 
   {path: 'students/new', component:StudentList},
   {path: '', component:Studentform},
   {path:'classList', component:SchoolClassList},
   {path:'examTime', component:ExamComponent},
   {path:'attendence',component:AttendanceComponent},
   {path:'fee', component:FeeComponent},
   {path:'result', component:ResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
