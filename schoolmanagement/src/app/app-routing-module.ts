import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './component/student.component/student.component';
import { AddstudentComponent } from './component/addstudent.component/addstudent.component';
import { ViewallstudentComponent } from './component/viewallstudent.component/viewallstudent.component';

const routes: Routes = [

{path:'student',component:StudentComponent},
{path:'addstudent',component:AddstudentComponent},
{path:'viewstudent',component:ViewallstudentComponent},
{path:'',component:AddstudentComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 


}
