import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Student } from './student/student';
import { Teacher } from './teacher/teacher';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';

const routes: Routes = [
  {path:'',component:Student},
  {path:'teacher',component:Teacher},
  {path :'allstu',component:ViewAllStudent},
  {path :'addstu',component:Addstudent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
