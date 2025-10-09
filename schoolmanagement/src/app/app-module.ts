import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Sidebar } from './components/sidebar/sidebar';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Viewclassroutine } from './components/viewclassroutine/viewclassroutine';


@NgModule({
  declarations: [
    App,
    Sidebar,
    Header,
    Home,
    Dashboard,
    Students,
    Teachers,
    Studentadmission,
    Teacheradd,
    Teacherschedule,
    Classes,
    Sections,
    Classroutine,
    Exam,
    Fees,
    Viewclassroutine
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [App]
})
export class AppModule { }
