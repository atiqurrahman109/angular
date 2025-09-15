import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { StudentList } from './component/student-list/student-list';
import { Studentform } from './component/studentform/studentform';

const routes: Routes = [
 
   {path: 'students/new', component:StudentList},
   {path: '', component:Studentform},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
