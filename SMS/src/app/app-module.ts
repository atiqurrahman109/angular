import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { StudentList } from './component/student-list/student-list';
import { Studentform } from './component/studentform/studentform';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchoolClassList } from './component/school-class-list/school-class-list';
import { SchoolClassForm } from './component/school-class-form/school-class-form';
import { SectionList } from './component/section-list/section-list';
import { SectionForm } from './component/section-form/section-form';


@NgModule({
  declarations: [
    App,
    StudentList,
    Studentform,
    SchoolClassList,
    SchoolClassForm,
    SectionList,
    SectionForm,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      FormsModule,
     ReactiveFormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay()),
      provideHttpClient(
      withFetch())
  ],
  bootstrap: [App]
})
export class AppModule { }
