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

const routes: Routes = [
  { path: 'viewteacher', component: ViewallteacherComponent },
  { path: 'updatestudent/:id', component: UpdatestudentComponent },
  { path: 'viewstudentdetials/:id', component: ViewallstudentdetailsComponent },
  { path: 'viewteacherdetails/:id',component:ViewallteacherdetailsComponent},
  { path: 'addteacher', component: AddteacherComponent },
  { path: 'addstudent', component: AddstudentComponent },
  { path: 'viewstudent', component: ViewallstudentComponent },
  { path: '', component: AddstudentComponent },
  { path: 'updateteacher/:id', component: UpdateteacherComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
