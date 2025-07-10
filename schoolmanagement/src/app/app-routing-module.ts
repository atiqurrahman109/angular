import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddstudentComponent } from './component/addstudent.component/addstudent.component';
import { ViewallstudentComponent } from './component/viewallstudent.component/viewallstudent.component';
import { AddteacherComponent } from './component/addteacher.component/addteacher.component';

const routes: Routes = [

{path:'addteacher',component:AddteacherComponent},
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
