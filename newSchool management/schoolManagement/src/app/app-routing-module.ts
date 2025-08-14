import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Component/add-student-component/add-student-component';
import { ViewStudentComponent } from './Component/view-student-component/view-student-component';
import { AddTeacherComponent } from './Component/add-teacher-component/add-teacher-component';
import { ViewTeacherComponent } from './Component/view-teacher-component/view-teacher-component';
import { Dashboard } from './layout/dashboard/dashboard';
import { Login } from './Component/auth/login/login';
import { Registration } from './Component/auth/registration/registration';

import { AttendanceComponent } from './Component/attendence/attendence';
import { ViewClassScheduleComponent } from './Component/view-class-schedule-component/view-class-schedule-component';

import { AddFeeComponent } from './Component/add-fee-component/add-fee-component';
import { RoutineComponent } from './Component/routine-component/routine-component';




const routes: Routes = [
  {path: 'addStu', component: AddStudentComponent},
  {path: 'viewAllStu', component: ViewStudentComponent},
  {path:'addTeacher', component:AddTeacherComponent},
  {path:'viewAllTeacher', component:ViewTeacherComponent},
  {path:'', component:Dashboard},
  {path:'login', component:Login},
  {path:'reg', component:Registration},
  
  {path: 'attendence', component: AttendanceComponent},
  {path:'viewClassSched', component:ViewClassScheduleComponent},
  {path: 'fee',component: AddFeeComponent},
  {path: 'viewRoutine',component: RoutineComponent}
  
 
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
