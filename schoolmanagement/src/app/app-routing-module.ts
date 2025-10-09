import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Students } from './components/students/students';
import { Teachers } from './components/teachers/teachers';
import { Studentadmission } from './components/studentadmission/studentadmission';
import { Teacheradd } from './components/teacheradd/teacheradd';
import { Teacherschedule } from './components/teacherschedule/teacherschedule';
import { Classes } from './components/classes/classes';
import { Sections } from './components/sections/sections';
import { Classroutine } from './components/classroutine/classroutine';
import { Exam } from './components/exam/exam';
import { Fees } from './components/fees/fees';
import { Viewclassroutine } from './components/viewclassroutine/viewclassroutine';

const routes: Routes = [
  { path: '', component: Dashboard },
  {path: 'students', component: Students},
  {path: 'students/admission', component: Studentadmission},
  {path: 'teachers', component: Teachers},
  {path: 'teachers/add', component: Teacheradd},
  {path: 'teachers/schedule', component: Teacherschedule},
  {path: 'classes', component: Classes},
  {path: 'sections', component: Sections},
  {path: 'addclassroutine', component: Classroutine},
  {path: 'viewclassroutine', component: Viewclassroutine},
  {path: 'exams', component: Exam},
  {path: 'fees', component: Fees},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
