import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Aboutus } from './aboutus/aboutus';
import { Home } from './home/home';
import { Contactus } from './contactus/contactus';
import { Dropdown } from './dropdown/dropdown';

const routes: Routes = [
  {path:'', component: Home},
  {path:'aboutus', component: Aboutus},
  {path:'contactus', component: Contactus},
  {path:'dropdown',component:Dropdown},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
