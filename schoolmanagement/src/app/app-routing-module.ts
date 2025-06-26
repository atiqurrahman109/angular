import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Student } from './student/student';
import { Teacher } from './teacher/teacher';
import { ViewAllStudent } from './view-all-student/view-all-student';
import { Addstudent } from './addstudent/addstudent';
import { UpdateStudent } from './update-student/update-student';
import { ViewAllLocation } from './location/view-all-location/view-all-location';


const routes: Routes = [
  {path:'',component:Student},
  {path:'teacher',component:Teacher},
  {path :'allstu',component:ViewAllStudent},
  {path :'addstu',component:Addstudent},
  {path :'updatestudent/:id',component:UpdateStudent},
<<<<<<< HEAD
  {path: 'allloc', component: ViewAllLocation}
=======
 
>>>>>>> dcaa91c4f1ea0e9cec9d28d63a9a9dd7a7a69f48
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
